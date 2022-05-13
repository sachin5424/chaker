import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSetupTableComponent } from './account-setup-table.component';

describe('AccountSetupTableComponent', () => {
  let component: AccountSetupTableComponent;
  let fixture: ComponentFixture<AccountSetupTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSetupTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSetupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
