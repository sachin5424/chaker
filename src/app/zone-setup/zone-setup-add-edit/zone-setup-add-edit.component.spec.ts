import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneSetupAddEditComponent } from './zone-setup-add-edit.component';

describe('ZoneSetupAddEditComponent', () => {
  let component: ZoneSetupAddEditComponent;
  let fixture: ComponentFixture<ZoneSetupAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneSetupAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneSetupAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
