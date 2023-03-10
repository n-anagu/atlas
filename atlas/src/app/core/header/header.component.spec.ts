import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewTitleComponent } from 'src/app/shared/view-title/view-title.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, ViewTitleComponent],
      imports: [MatToolbarModule, RouterTestingModule, MatButtonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have h1', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')).toBeDefined;
  });

  it('should render logo', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(
      compiled.querySelector('img.app-logo')?.getAttribute('src')
    )?.toContain(
      '/assets/logo/atlas-low-resolution-logo-black-on-white-background-cropped-min.svg'
    );
  });

  it('should render back button', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const compiled = fixture.nativeElement as HTMLElement;

    component.showBackBtn = true;
    fixture.detectChanges();

    expect(compiled.querySelector('button.prev-page-btn')).toBeDefined;
  });

  it('should not render back button', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const compiled = fixture.nativeElement as HTMLElement;

    component.showBackBtn = false;
    fixture.detectChanges();

    expect(compiled.querySelector('button.prev-page-btn')).not.toBeDefined;
  });
});
