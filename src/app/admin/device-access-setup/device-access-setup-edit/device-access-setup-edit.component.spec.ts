import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceAccessSetupEditComponent } from './device-access-setup-edit.component';

describe('DeviceAccessSetupEditComponent', () => {
  let component: DeviceAccessSetupEditComponent;
  let fixture: ComponentFixture<DeviceAccessSetupEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceAccessSetupEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceAccessSetupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
