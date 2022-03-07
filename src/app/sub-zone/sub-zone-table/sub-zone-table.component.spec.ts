import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubZoneTableComponent } from './sub-zone-table.component';

describe('SubZoneTableComponent', () => {
  let component: SubZoneTableComponent;
  let fixture: ComponentFixture<SubZoneTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubZoneTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubZoneTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
