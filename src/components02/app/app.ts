import {Component, View, provide} from 'angular2/core'
import {StockSearch} from './components/stockSearch';
import {Exchanges} from './components/Exchanges';
import {ExchangesService} from './services/ExchangesService';

@Component({
  selector: 'App',
  providers: [ provide('Search', {useClass:ExchangesService}) ]
})
@View({
  template: `
    <header>
      <h2>Simple Stock Search Angular 2 App</h2>
    </header>
    <StockSearch>
      <Exchanges></Exchanges>
    </StockSearch>
  `,
  directives: [StockSearch, Exchanges]
})
export class App {}
