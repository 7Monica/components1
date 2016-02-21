import {Component, View, provide, Inject} from 'angular2/core';
import {StockList} from './stockList';
import {StocksService} from '../services/StocksService';

@Component({
  selector: 'StockSearch',
  viewProviders: [provide('Search', { useClass: StocksService }) ]
})
@View({
  template: `
    <section>
      <ng-content></ng-content>
      <h3>Stock Price & Name Lookup:</h3>
      <form (submit)="doSearch()">
        <input [(ngModel)]="searchText"/>
      </form>
      <StockList [stocks]="stocks"></StockList>
    </section>
  `,
  directives: [StockList]
})
export class StockSearch {
  searchText: string;
  stocks: Object[];
  
  constructor(@Inject('Search') stocksService) {
    this.stocksService = stocksService;
  }
  
  doSearch() {
    this.stocksService.snapshot(this.searchText)
    .subscribe(
      (data) => {this.stocks = data},
      (err) => {console.log('error!', err)}
    );
  }
}