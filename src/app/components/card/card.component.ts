import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product: any;
  @Output() doClick = new EventEmitter();
  constructor() { }

  click(id: number){
    this.doClick.emit(id);
  }
 

}
