import { TestBed } from '@angular/core/testing';

import { QrscannerService } from './qrscanner.service';

describe('QrscannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QrscannerService = TestBed.get(QrscannerService);
    expect(service).toBeTruthy();
  });
});
