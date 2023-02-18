import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { regionIdParam, regionsUrlSegment } from './consts';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
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
