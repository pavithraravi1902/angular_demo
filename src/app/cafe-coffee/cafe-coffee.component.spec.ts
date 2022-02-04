import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeCoffeeComponent } from './cafe-coffee.component';

describe('CafeCoffeeComponent', () => {
  let component: CafeCoffeeComponent;
  let fixture: ComponentFixture<CafeCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CafeCoffeeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
