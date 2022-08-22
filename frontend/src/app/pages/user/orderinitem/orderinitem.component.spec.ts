import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderinitemComponent } from './orderinitem.component';

describe('OrderinitemComponent', () => {
  let component: OrderinitemComponent;
  let fixture: ComponentFixture<OrderinitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderinitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderinitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
