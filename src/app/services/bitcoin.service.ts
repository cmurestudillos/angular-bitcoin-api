import { Injectable } from '@angular/core';
// Peticiones Http
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BitcoinService {
  constructor(private _http: HttpClient) { }

  // Peticion para obtener los datos de la API
  getEurCurerency(): Observable<any>{
    return this._http.get('https://api.coindesk.com/v1/bpi/currentprice/EUR.json');
  }

  getUSDCurerency(): Observable<any>{
    return this._http.get('https://api.coindesk.com/v1/bpi/currentprice/USD.json');
  }

  getGBPCurerency(): Observable<any>{
    return this._http.get('https://api.coindesk.com/v1/bpi/currentprice/GBP.json');
  }
}