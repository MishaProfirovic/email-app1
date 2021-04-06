import { TestBed } from '@angular/core/testing';

import { AppListaService } from './app-lista.service';

describe('AppListaService', () => {
  let service: AppListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
