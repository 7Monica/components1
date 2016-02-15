//a simple service
import {Injectable} from 'angular2/core';
import {Http, URLSearchParams} from 'angular2/http';

@Injectable()
export class StocksHistoricalService {
  
  // TS shortcut "public" to put http on this
  constructor(public http:Http) {}
  
  historical(symbols:string):any {
    debugger
    let params = new URLSearchParams();
    params.set('symbols', symbols);

    // return this.http.get("/api/historical", {search: params})
    return this.http.get("/api/historical/" + symbols)
      .map(res => res.json()) // convert to JSON
      .map(x => x.filter(y => y.name)); // Remove invalid stocks (no name)
  }
}