import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
list:any;
constructor(private Service:CurrencyService){}
selectedCurrency:any;
EUR:any;
USD:any;
INR:any;
ngOnInit(): void{

}
CallAPI()
  {
    //alert(this.selectedCurrency)

    this.Service.GetAllCurrency().subscribe((data:any)=>{
      alert(JSON.stringify(data.currencies))

      
      
    })
  }
 

}
