import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainSectionComponent } from './app-main-section.component';

describe('AppMainSectionComponent', () => {
  let component: AppMainSectionComponent;
  let fixture: ComponentFixture<AppMainSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMainSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
