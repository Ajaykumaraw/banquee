import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingstartComponent } from './bankingstart.component';

describe('BankingstartComponent', () => {
  let component: BankingstartComponent;
  let fixture: ComponentFixture<BankingstartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingstartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
