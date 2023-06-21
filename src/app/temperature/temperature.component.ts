import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
//submitted: boolean=false;
// Farenheit: any;
// ngOnInit(): void{}
// f1:FormGroup= new FormGroup({


//   Fahrenheit: new FormControl('',[Validators.required])})

// Save()
// {
//   this.submitted=true;
//   alert(JSON.stringify(this.f1.value))
// }


c = "";
  f = "";
  constructor() {}

  ngOnInit() {}

  onChange(value: string | null, type: "c" | "f") {
    if (value === null) {
      this.c = "";
      this.f = "";
      return;
    }

    const temperature = Number(value);
    if (type === "c") {
      this.f = ((temperature * 9) / 5 + 32).toFixed(1);
    } else {
      this.c = (((temperature - 32) * 5) / 9).toFixed(1);
    }
  }


}
