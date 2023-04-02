import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCarregarMaisComponent } from './botao-carregar-mais.component';

describe('BotaoCarregarMaisComponent', () => {
  let component: BotaoCarregarMaisComponent;
  let fixture: ComponentFixture<BotaoCarregarMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoCarregarMaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoCarregarMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
