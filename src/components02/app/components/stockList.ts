// List people
import {Component, View, EventEmitter} from 'angular2/core';

@Component({
  selector: 'StockList',
  inputs: ['stocks'],
  outputs: ['showStock']
})
@View({
  template: `
    <ul class="stock-list">
      <li *ngFor="#stock of stocks" (click)="showStock.next(stock)"> 
        <strong>{{stock.symbol}} ({{stock.ask | currency:'USD':true}}):</strong> {{stock.name}}
      </li>
    </ul>
  `
})
export class StockList {
  public stocks: Array<string>;
  public showStock: EventEmitter = new EventEmitter();

  constructor() {}
}
