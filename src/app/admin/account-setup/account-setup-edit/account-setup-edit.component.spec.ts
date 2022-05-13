import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSetupEditComponent } from './account-setup-edit.component';

describe('AccountSetupEditComponent', () => {
  let component: AccountSetupEditComponent;
  let fixture: ComponentFixture<AccountSetupEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSetupEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSetupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
