import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceSetupTableComponent } from './device-setup-table.component';

describe('DeviceSetupTableComponent', () => {
  let component: DeviceSetupTableComponent;
  let fixture: ComponentFixture<DeviceSetupTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceSetupTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceSetupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
