import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AtlasRoute } from '../model-routing';

import { CountryComponent } from './country.component';

const countryRoutes: AtlasRoute[] = [
  {
    path: '',
    component: CountryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(countryRoutes)],
  exports: [RouterModule],
})
export class CountryRoutingModule {}
