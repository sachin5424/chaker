import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceAccessSetupTableComponent } from './device-access-setup-table.component';

describe('DeviceAccessSetupTableComponent', () => {
  let component: DeviceAccessSetupTableComponent;
  let fixture: ComponentFixture<DeviceAccessSetupTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceAccessSetupTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceAccessSetupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
