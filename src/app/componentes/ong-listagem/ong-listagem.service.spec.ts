import { TestBed } from '@angular/core/testing';

import { OngListagemService } from './ong-listagem.service';

describe('OngListagemService', () => {
  let service: OngListagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OngListagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
