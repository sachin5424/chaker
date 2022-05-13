import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSetupAddComponent } from './account-setup-add.component';

describe('AccountSetupAddComponent', () => {
  let component: AccountSetupAddComponent;
  let fixture: ComponentFixture<AccountSetupAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSetupAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSetupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
