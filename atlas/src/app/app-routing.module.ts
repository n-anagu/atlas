import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { homeUrl, regionIdParam, regionsUrlSegment } from './consts';
import { HomeComponent } from './home/home.component';
import { AtlasRoute } from './model-routing';

const routes: AtlasRoute[] = [
  {
    path: '',
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
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
