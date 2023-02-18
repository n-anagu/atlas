import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewTitleComponent } from '../shared/view-title/view-title.component';

import { RegionComponent } from './region.component';

describe('RegionComponent', () => {
  let component: RegionComponent;
  let fixture: ComponentFixture<RegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegionComponent, ViewTitleComponent],
      imports: [MatListModule, HttpClientModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
