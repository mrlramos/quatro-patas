import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngListagemComponent } from './ong-listagem.component';

describe('OngListagemComponent', () => {
  let component: OngListagemComponent;
  let fixture: ComponentFixture<OngListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngListagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
