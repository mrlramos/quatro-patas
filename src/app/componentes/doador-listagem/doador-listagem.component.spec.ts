import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoadorListagemComponent } from './doador-listagem.component';

describe('DoadorListagemComponent', () => {
  let component: DoadorListagemComponent;
  let fixture: ComponentFixture<DoadorListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoadorListagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoadorListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
