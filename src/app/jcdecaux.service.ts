import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JcdecauxService {

  constructor(private http: HttpClient) { }

  getStations() : Observable<any[]>{
    const apiKey = 'dac4324c3113a5739b50f5c295c16c7cfbe82df3';
    const apiUrl = `https://api.jcdecaux.com/vls/v3/stations?apiKey=${apiKey}`;
    return this.http.get<any[]>(apiUrl);
  }
}
