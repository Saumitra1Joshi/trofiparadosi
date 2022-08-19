import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardstatusComponent } from './cardstatus.component';

describe('CardstatusComponent', () => {
  let component: CardstatusComponent;
  let fixture: ComponentFixture<CardstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
