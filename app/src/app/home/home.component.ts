import { Component, OnInit } from '@angular/core';
import { WalmartService } from '../walmart.service';
import { Product } from '../product';
import { Discount } from '../discount';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:Product[] = []
  result:any = []
  discounts:Discount[] = []
  addCart:Product[] = []
  count = 0
  show = false
  alert = false
  seeResume = false
  discountBrand:any = {}
  noDiscount:any = {}
  subtotal = 0
  disGrow = 0
  constructor(
    private walmartService: WalmartService
  ) { }

  ngOnInit(): void {
    this.getProducts ()
    this.getDiscounts()
  }

  isResume(){
    if (this.count>0) {
      this.seeResume = true
    }else{
      this.alert = true
    }
  }
  
  back(back:boolean){
    this.seeResume = back
  }

  searchBrand(brand:string){
    if (brand=='All') {
      this.walmartService.getProducts()
      .subscribe((data:any)=>{
        this.products = this.urlImages(data)
       })
    }else{
      this.walmartService.searchBrand(brand)
      .subscribe((data:any)=>{
        this.products = this.urlImages(data)
       })
    }
    
  }
  checkCart(item:Product, num:number, i:number){
    this.alert = false
    if (!num && this.addCart.length > 0) {
      let index = this.addCart.indexOf(item)
      if (index!==-1) {
        this.addCart.splice(index,1)
      }
    }else if(num){
      this.addCart.push(item)
    }
    let cart = this.addCart.filter((x:Product)=>x==item)
    this.products[i].cart = cart.length
    this.count = this.addCart.length
    const dataArr = new Set(this.addCart);
    this.result = [...dataArr];
    this.subtotal = 0
    this.discountBrand = {discount:0}

    this.discounts.map((dis:Discount)=>{
      if (dis.brand === item.brand) {
        dis.subtotal += item.price
      }
    })

    this.result.map((res:Product)=>{
      res.total = res.price * res.cart
      this.subtotal = this.subtotal + res.total
      let disc = this.discounts.filter((x:Discount)=>x.brand==res.brand)[0]
      if(disc.subtotal > disc.threshold){
        this.discountBrand = disc
      }
    })
    
    let uniArr = [... new Set(this.result.map((data:Product) => data.brand))]
    
    let init = 0
      let fil = this.result.filter((x:Product)=>x.brand!=this.discountBrand.brand)
      fil.map((res:any)=>{
        let dis = this.discounts.filter((x:Discount)=>x.brand==res.brand)[0]
        if(dis.discount > init){
          if (uniArr.length>1) {
            this.show = true
          }else{
            this.show = false
          }
          dis.left = dis.threshold - res.total
          dis.total = dis.discount
          this.noDiscount = dis
          init = dis.discount
        }else{
          this.show = false
        }
      })
    
    
    
  }

  urlImages(data:any){
    return data.map((pro:any)=>{
      pro.image = 'https://'+pro.image
      pro.cart = 0
      return pro
    })

  }

  getProducts () {
    this.walmartService.getProducts()
    .subscribe((data:any)=>{
      this.products = this.urlImages(data)
      
    })
    
  }

  getDiscounts(){
    this.walmartService.getDiscounts()
    .subscribe((data:any)=>{
      this.discounts = data
      this.discounts.map((dis:Discount)=>{
        dis.subtotal = 0
      })
    })
  }

}
