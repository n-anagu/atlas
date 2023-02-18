import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import { MatCardModule } from '@angular/material/card';
import { CountryService } from './country.service';
import { CountryRoutingModule } from './country-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CountryComponent],
  imports: [CommonModule, MatCardModule, CountryRoutingModule, SharedModule],
  providers: [CountryService],
})
export class CountryModule {}
