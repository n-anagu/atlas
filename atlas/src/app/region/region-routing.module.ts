import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { countriesUrlSegment, countryIdParam } from '../consts';
import { AtlasRoute } from '../model-routing';

import { RegionComponent } from './region.component';

const regionRoutes: AtlasRoute[] = [
  {
    path: '',
    component: RegionComponent,
  },
  {
    path: `${countriesUrlSegment}/:${countryIdParam}`,
    loadChildren: () =>
      import('../country/country.module').then((m) => m.CountryModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(regionRoutes)],
  exports: [RouterModule],
})
export class RegionRoutingModule {}
