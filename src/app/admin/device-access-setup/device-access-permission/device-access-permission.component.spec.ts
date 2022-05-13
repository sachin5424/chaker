import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceAccessPermissionComponent } from './device-access-permission.component';

describe('DeviceAccessPermissionComponent', () => {
  let component: DeviceAccessPermissionComponent;
  let fixture: ComponentFixture<DeviceAccessPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceAccessPermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceAccessPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
