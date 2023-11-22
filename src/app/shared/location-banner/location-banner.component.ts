import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbAlert} from "@ng-bootstrap/ng-bootstrap";
import {RouterLink} from "@angular/router";
import {
  isDefaultLocationState,
  GeolocationResponse,
  GeolocationService,
  isValidLocationErrorStateFilter,
  isValidLocationState
} from "../../services/geolocation.service";
import {combineLatest, filter} from "rxjs";

@Component({
  selector: 'app-location-banner',
  standalone: true,
  imports: [CommonModule, NgbAlert, RouterLink],
  templateUrl: './location-banner.component.html',
  styleUrls: ['./location-banner.component.scss']
})
export class LocationBannerComponent {
  location$ = this.geolocationService.location$;
  locationError$ = this.geolocationService.locationError$.pipe(filter(isValidLocationErrorStateFilter));

  public isValidLocationState = isValidLocationState;
  public isDefaultLocationState = isDefaultLocationState;

  constructor(private readonly geolocationService: GeolocationService) {
    geolocationService.location$.pipe(filter(isValidLocationState)).subscribe((location: GeolocationResponse) => {
      console.log('Location received', location);
    })
  }

  public handleGrantLocation(event: Event): void {
    event.preventDefault();
    this.geolocationService.getGeolocation();
  }
}
