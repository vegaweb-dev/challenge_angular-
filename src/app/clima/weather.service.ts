//caracteres de teclado: ``${}[]\^
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  URI:string='';
  apiKey='9731cdd4ef249eac1934f18166a41aee';

  constructor(private HttpClient: HttpClient) { 
    this.URI= `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q= `

  }
  getWeather(cityName:string,countryCode:string){
    return this.HttpClient.get(`${this.URI}${cityName},${countryCode}`);
  }
}
