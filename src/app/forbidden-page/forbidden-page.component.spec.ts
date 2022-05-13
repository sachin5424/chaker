import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FORBIDDENPageComponent } from './forbidden-page.component';

describe('FORBIDDENPageComponent', () => {
  let component: FORBIDDENPageComponent;
  let fixture: ComponentFixture<FORBIDDENPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FORBIDDENPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FORBIDDENPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
