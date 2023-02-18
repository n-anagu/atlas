import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTitleComponent } from './view-title.component';

describe('ViewTitleComponent', () => {
  let component: ViewTitleComponent;
  let fixture: ComponentFixture<ViewTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in h2 tags', () => {
    const fixture = TestBed.createComponent(ViewTitleComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;

    component.title = 'mockTitle';
    fixture.detectChanges();

    const header = compiled.querySelector('h2');
    expect(header).toBeDefined;
    expect(header?.innerText).toContain('mockTitle');
  });
});
