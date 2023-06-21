import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { CurrencyComponent } from './currency/currency.component';
import { TemperatureComponent } from './temperature/temperature.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"weather",component:WeatherComponent},
  {path:"currency",component:CurrencyComponent},
  {path:"temperature",component:TemperatureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
