import { TestBed } from '@angular/core/testing';

import { CartUpdateToDatabaseService } from './cart-update-to-database.service';

describe('CartUpdateToDatabaseService', () => {
  let service: CartUpdateToDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartUpdateToDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
