import { TestBed } from '@angular/core/testing';

import { DoadorListagemService } from './doador-listagem.service';

describe('DoadorListagemService', () => {
  let service: DoadorListagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoadorListagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
