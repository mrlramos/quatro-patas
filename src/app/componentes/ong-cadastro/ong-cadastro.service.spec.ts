import { TestBed } from '@angular/core/testing';

import { OngCadastroService } from './ong-cadastro.service';

describe('OngCadastroService', () => {
  let service: OngCadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OngCadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
