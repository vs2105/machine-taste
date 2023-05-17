import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderArrayComponent } from './order-array.component';

describe('OrderArrayComponent', () => {
  let component: OrderArrayComponent;
  let fixture: ComponentFixture<OrderArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
