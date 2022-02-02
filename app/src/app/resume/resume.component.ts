import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  @Input() result:Product[] = []
  @Input() subtotal:any = Number
  @Input() discountBrand:any = {}
  @Input() noDiscount:any = {}
  @Input() show:boolean = false
  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    
  }
  back(){
    this.newItemEvent.emit(false);
  }
}
