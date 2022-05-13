import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSetupDashboardComponent } from './account-setup-dashboard.component';

describe('AccountSetupDashboardComponent', () => {
  let component: AccountSetupDashboardComponent;
  let fixture: ComponentFixture<AccountSetupDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSetupDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSetupDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
