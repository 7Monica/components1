import {Component, View, provide, Inject} from 'angular2/core'
import {StockList} from './stockList'
import {StocksService} from '../services/StocksService'
function showTime() {
  return function() {
    return (new Date()).getTime();
  }
}

@Component({
  selector: 'StockSearch',
  providers: [StocksService, 
    provide('SECURITY_KEY', { useValue: 'abc123' }),
    provide(showTime, {useFactory: showTime})
  ]
})
@View({
  template: `
    <section>
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
  
  constructor(public stockService:StocksService, 
    @Inject('SECURITY_KEY') seckey,
    @Inject(showTime) getCurrentTime) { 

    console.log('seckey', seckey, getCurrentTime());
  }
  
  doSearch() {
    this.stockService.snapshot(this.searchText)
    .subscribe(
      (data) => {this.stocks = data},
      (err) => {console.log('error!', err)}
    );
  }
}
