import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubZoneDashboardComponent } from './sub-zone-dashboard.component';

describe('SubZoneDashboardComponent', () => {
  let component: SubZoneDashboardComponent;
  let fixture: ComponentFixture<SubZoneDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubZoneDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubZoneDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
