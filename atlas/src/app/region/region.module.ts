import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionComponent } from './region.component';
import { RegionService } from './region.service';
import { HttpClientModule } from '@angular/common/http';
import { RegionRoutingModule } from './region-routing.module';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RegionComponent],
  providers: [RegionService],
  imports: [
    CommonModule,
    HttpClientModule,
    RegionRoutingModule,
    MatListModule,
    SharedModule,
  ],
})
export class RegionModule {}
