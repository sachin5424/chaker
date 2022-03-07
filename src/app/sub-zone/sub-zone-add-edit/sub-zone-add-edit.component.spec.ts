import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubZoneAddEditComponent } from './sub-zone-add-edit.component';

describe('SubZoneAddEditComponent', () => {
  let component: SubZoneAddEditComponent;
  let fixture: ComponentFixture<SubZoneAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubZoneAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubZoneAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
