
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url:any;
  constructor(private http:HttpClient) { }
  public GetAllweather(selCity:any){
    
return this.http.get("http://api.weatherapi.com/v1/current.json?key=4fb8d1cd2cbd4490a3360502232006&q="+selCity)
  }

}
