import {Component, View} from 'angular2/core'
import {StockList} from './stockList'
import {StocksService} from '../services/StocksService'
// import {StocksHistoricalService} from '../services/StocksHistoricalService'

@Component({
  selector: 'StockSearch',
  inputs: ['mytitle'],
  providers: [StocksService]
  // providers: [StocksService,StocksHistoricalService]
})
@View({
  template: `
    <section>
      <h3>{{mytitle}}</h3>
      <form (submit)="doSearch()">
        <input [(ngModel)]="searchText"/>
      </form>
      <div> {{ stock }} </div>
      <StockList [stocks]="stocks" (showdetails)="showHistory($event)"></StockList>

    </section>
  `,
  directives: [StockList]
})
export class StockSearch {
  mytitle: String; 
  searchText: String = "CRM";
  stocks: Object[];
  stock: Object;
  
  // constructor(public stockService: StocksService, public stockHistoricalService: StocksHistoricalService) { }
  constructor(public stockService: StocksService) { }
  
  doSearch() {
    this.stockService.snapshot(this.searchText)
    .subscribe(
      (data) => {this.stocks = data},
      (err) => {console.log('error!', err)}
    );
  }

  showHistory(stock) {
    console.log("TODO: Use the passed data to display detailed stock info", stock);
    this.stock = stock;

    this.stockHistoricalService.historical(stock.symbol)
      .subscribe(
      (data) => { console.log("historical", data); this.stock = data },
      (err) => { console.log('error!', err) }
      );


  }
}