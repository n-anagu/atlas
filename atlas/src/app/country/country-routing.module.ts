import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryComponent } from './country.component';

const countryRoutes: Routes = [{ path: '', component: CountryComponent }];

@NgModule({
  imports: [RouterModule.forChild(countryRoutes)],
  exports: [RouterModule],
})
export class CountryRoutingModule {}
