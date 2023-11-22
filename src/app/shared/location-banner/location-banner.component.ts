import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import {
  isDefaultLocationState,
  GeolocationResponse,
  GeolocationService,
  isValidLocationErrorStateFilter,
  isValidLocationState,
} from '../../services/geolocation.service';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  of,
  Subject,
  switchMap,
} from 'rxjs';
import { LocationSearchService } from '../../services/location-search.service';

@Component({
  selector: 'app-location-banner',
  standalone: true,
  imports: [CommonModule, NgbAlert, RouterLink],
  templateUrl: './location-banner.component.html',
  styleUrls: ['./location-banner.component.scss'],
})
export class LocationBannerComponent implements OnInit {
  public searchText$: Subject<string> = new Subject<string>();
  public locationNotFound$ = this.locationSearchService.locationNotFound$;
  constructor(
    private readonly geolocationService: GeolocationService,
    private readonly locationSearchService: LocationSearchService
  ) {}

  ngOnInit() {
    this.searchText$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter(value => value !== ''),
        switchMap((text: string) =>
          this.locationSearchService.searchForSingleLocation(text).pipe(
            filter(data =>
              isValidLocationState({
                longitude: data.longitude,
                latitude: data.latitude,
                accuracy: -1,
              })
            )
          )
        )
      )
      .subscribe(data => {
        this.geolocationService.setLocation({
          longitude: data.longitude,
          latitude: data.latitude,
        });
      });
  }

  public handleGrantLocation(event: Event): void {
    event.preventDefault();
    this.geolocationService.getGeolocation();
  }

  search(event: string) {
    this.searchText$.next(event);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
