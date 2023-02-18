import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionComponent } from './region.component';

const regionRoutes: Routes = [{ path: '', component: RegionComponent }];

@NgModule({
  imports: [RouterModule.forChild(regionRoutes)],
  exports: [RouterModule],
})
export class RegionRoutingModule {}
