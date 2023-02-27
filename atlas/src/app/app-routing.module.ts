import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { homeUrl, regionIdParam, regionsUrlSegment } from './consts';
import { HomeComponent } from './home/home.component';
import { AtlasRoute } from './model-routing';

const routes: AtlasRoute[] = [
  {
    path: '',
    data: {
      hideBackBtn: true,
    },
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: `${homeUrl}`,
    component: HomeComponent,
    data: {
      hideBackBtn: true,
    },
  },
  {
    path: `${regionsUrlSegment}/:${regionIdParam}`,
    loadChildren: () =>
      import('./region/region.module').then((m) => m.RegionModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
