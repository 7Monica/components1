//a simple service
import {Injectable} from 'angular2/core';

@Injectable()
export class ExchangesService {
  constructor() { }
  
  // Faking a call to an external service 
  snapshot(symbols: string): any {

    return [
      { id: 1, name: 'NASDAQ' },
      { id: 2, name: 'New York Stock Exchange' },
      { id: 3, name: 'Chicago Stock Exchange' }
    ]
  }
}
