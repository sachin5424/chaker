import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceSetupAddEditComponent } from './device-setup-add-edit.component';

describe('DeviceSetupAddEditComponent', () => {
  let component: DeviceSetupAddEditComponent;
  let fixture: ComponentFixture<DeviceSetupAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceSetupAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceSetupAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
