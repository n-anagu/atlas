import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CountryModule } from './country/country.module';
import { HomeModule } from './home/home.module';
import { RegionModule } from './region/region.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    RegionModule,
    CountryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
