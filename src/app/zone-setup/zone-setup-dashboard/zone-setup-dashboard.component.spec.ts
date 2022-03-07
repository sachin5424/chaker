import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneSetupDashboardComponent } from './zone-setup-dashboard.component';

describe('ZoneSetupDashboardComponent', () => {
  let component: ZoneSetupDashboardComponent;
  let fixture: ComponentFixture<ZoneSetupDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneSetupDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneSetupDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
