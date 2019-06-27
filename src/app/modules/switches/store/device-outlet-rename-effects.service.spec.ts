import {TestBed} from '@angular/core/testing';

import {DeviceOutletRenameEffectsService} from './device-outlet-rename-effects.service';

describe('DeviceOutletRenameEffectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceOutletRenameEffectsService = TestBed.get(DeviceOutletRenameEffectsService);
    expect(service).toBeTruthy();
  });
});
