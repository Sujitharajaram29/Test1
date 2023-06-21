import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  url:any;
  
  constructor(private http:HttpClient) { }
  public GetAllCurrency(){
    return this.http.get("http://api.getgeoapi.com/v2/currency/list?api_key=f579402c0f674551faa98b030dda96c02fbe664f")
  }
}
