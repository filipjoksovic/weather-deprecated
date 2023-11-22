import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './layout/home-layout.component';
import { WeatherSummaryComponent } from './pages/weather-summary/weather-summary.component';
import {SidebarComponent} from "../shared/sidebar/sidebar.component";
import { CityDetailsComponent } from './components/city-details/city-details.component';
import { ForecastDailyComponent } from './components/forecast-daily/forecast-daily.component';
import { ForecastWeeklyComponent } from './components/forecast-weekly/forecast-weekly.component';
import { ForecastDetailsComponent } from './components/forecast-details/forecast-details.component';
import {
  LocationBannerComponent
} from "../shared/location-banner/location-banner.component";


@NgModule({
  declarations: [
    HomeLayoutComponent,
    WeatherSummaryComponent,
    CityDetailsComponent,
    ForecastDailyComponent,
    ForecastWeeklyComponent,
    ForecastDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SidebarComponent,
    LocationBannerComponent
  ]
})
export class HomeModule { }
