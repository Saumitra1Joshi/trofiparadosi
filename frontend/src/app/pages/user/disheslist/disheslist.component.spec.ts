import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisheslistComponent } from './disheslist.component';

describe('DisheslistComponent', () => {
  let component: DisheslistComponent;
  let fixture: ComponentFixture<DisheslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisheslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisheslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
