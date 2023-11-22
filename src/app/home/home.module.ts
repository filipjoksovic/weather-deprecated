import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './layout/home-layout.component';
import { WeatherSummaryComponent } from './pages/weather-summary/weather-summary.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { CityDetailsComponent } from './components/city-details/city-details.component';
import { ForecastDailyComponent } from './components/forecast-daily/forecast-daily.component';
import { ForecastWeeklyComponent } from './components/forecast-weekly/forecast-weekly.component';
import { ForecastDetailsComponent } from './components/forecast-details/forecast-details.component';
import { LocationBannerComponent } from '../shared/location-banner/location-banner.component';
import { DisplayValueWithUnitPipe } from './pipes/display-value-with-unit.pipe';
import { DayOfWeekPipe } from './pipes/day-of-week.pipe';
import { HourlyMeasurmentComponent } from './components/hourly-measurment/hourly-measurment.component';
import { RoundedPillComponent } from '../shared/rounded-pill/rounded-pill.component';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    WeatherSummaryComponent,
    CityDetailsComponent,
    ForecastDailyComponent,
    ForecastWeeklyComponent,
    ForecastDetailsComponent,
    DisplayValueWithUnitPipe,
    DayOfWeekPipe,
    HourlyMeasurmentComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SidebarComponent,
    LocationBannerComponent,
    RoundedPillComponent,
  ],
})
export class HomeModule {}
