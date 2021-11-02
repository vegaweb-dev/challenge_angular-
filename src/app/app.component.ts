import { Component, OnInit } from '@angular/core';
import {WeatherService} from './clima/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  wheather;
  
  

  constructor(private weatherService:WeatherService){

  }

  ngOnInit(){

    

  }

  getWeather(cityName:string,countryCode:string){

    this.weatherService.getWeather(cityName,countryCode)
    .subscribe(
      res=>this.weather=res,
      err=>console.log(err)
        
        )

  }

submitLocation(cityName:HTMLInputElement, countryCode:HTMLInputElement){
  //console.log(cityName,countryCode);
  this.getWeather(cityName.value, countryCode.value);
  cityName.value='';
  countryCode.value='';
  cityName.focus();
  return false;
}

}