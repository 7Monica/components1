import {Component, View, Inject} from 'angular2/core'

@Component({
    selector: 'Exchanges'
})
@View({
    template: `
    <h3>Exchanges</h3>
    <ul>
      <li *ngFor="#exchange of exchanges">
        <strong>{{exchange.id}}:</strong> {{exchange.name}}
      </li>
    </ul>
  `
})
export class Exchanges {
  public exchanges: Array<any>;
  constructor(@Inject('Search') exchanges) {
    console.log("Exchanges", exchanges);
    this.exchanges = exchanges.snapshot();
  }
}