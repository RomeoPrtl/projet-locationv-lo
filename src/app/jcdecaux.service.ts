import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JcdecauxService {

  constructor(private http: HttpClient) { }

  getStations() : Observable<any[]>{
    const apiKey = 'votre clé d'api ici';
    const apiUrl = `https://api.jcdecaux.com/vls/v3/stations?apiKey=${apiKey}`;
    return this.http.get<any[]>(apiUrl);
  }
}
