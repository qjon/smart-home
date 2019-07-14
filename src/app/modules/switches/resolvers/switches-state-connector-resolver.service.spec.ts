import { TestBed } from '@angular/core/testing';

import { SwitchesStateConnectorResolverService } from './switches-state-connector-resolver.service';

describe('SwitchesStateConnectorResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwitchesStateConnectorResolverService = TestBed.get(SwitchesStateConnectorResolverService);
    expect(service).toBeTruthy();
  });
});
