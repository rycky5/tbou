import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCampeonatoComponent } from './card-campeonato.component';

describe('CardCampeonatoComponent', () => {
  let component: CardCampeonatoComponent;
  let fixture: ComponentFixture<CardCampeonatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCampeonatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
