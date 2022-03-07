import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceSetupDashboardComponent } from './device-setup-dashboard.component';

describe('DeviceSetupDashboardComponent', () => {
  let component: DeviceSetupDashboardComponent;
  let fixture: ComponentFixture<DeviceSetupDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceSetupDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceSetupDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
