import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceAccessSetupDashboardComponent } from './device-access-setup-dashboard.component';

describe('DeviceAccessSetupDashboardComponent', () => {
  let component: DeviceAccessSetupDashboardComponent;
  let fixture: ComponentFixture<DeviceAccessSetupDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceAccessSetupDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceAccessSetupDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
