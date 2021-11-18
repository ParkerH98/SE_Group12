import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient: HttpClient) { }


  public apiTest(startTime: string, lat: string, long: string, maxradiusKm: string, magnitude: string): Observable<string[]>
  {

    var fetchUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=" 
                + startTime + "&latitude="
                + lat + "&longitude="
                + long + "&maxradiuskm="
                + maxradiusKm + "&minmagnitude="
                + magnitude;
    

    return this._httpClient.get<string[]>(fetchUrl);
  }
}
