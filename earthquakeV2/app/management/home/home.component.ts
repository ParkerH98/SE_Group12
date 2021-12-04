import { Component, OnInit } from '@angular/core';
import { EarthquakeResponse } from 'src/app/models/earthquake-response';
import { Feature } from 'src/app/models/feature-model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void
  {
  }
  
  public startTime = '2021-01-15' as string
  public latitude = '37' as string
  public longitude = '-117' as string
  public maxRadiusKM = '40' as string
  public minMagnitude = '1.5' as string

  stringResponse = '' as string
  serializedResponse = '' as any

  features = {} as Feature[]
  featureProperties = [] as any[]
  geometry = [] as any[]
  lat = 0 as number
  long = 0 as number


  count = 0 as number
  place = '' as string
  
  public callApi(): void
  {
    this.api.apiTest(this.startTime, this.latitude, this.longitude, this.maxRadiusKM, this.minMagnitude).subscribe(resp =>
    {
      this.stringResponse = JSON.stringify(resp);
      this.serializedResponse = resp

      this.count = this.serializedResponse.metadata.count
      this.features = this.serializedResponse.features as Feature[]


debugger
      this.features.forEach(feature =>
      {
        this.featureProperties.push(feature.properties)
      });
    });
  }
}
