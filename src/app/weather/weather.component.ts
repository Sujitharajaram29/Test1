import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  list:any;
constructor(private Service:WeatherService){

}
name:any;
Temperature :any;
temp_f:any;
country:any;
last_updated:any;
selectedCity:any;
  ngOnInit(): void {
    
  }

  CallAPI()
  {
    //alert(this.selectedCity)
    this.Service.GetAllweather(this.selectedCity).subscribe((data:any)=>{
      alert(JSON.stringify(data.current.temp_c))

      //this.list=data
      
    })
  }

}
