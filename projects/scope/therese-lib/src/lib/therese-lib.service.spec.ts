import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { ThereseLibService } from './therese-lib.service';

describe('ThereseLibService', () => {
  let spectator: SpectatorService<ThereseLibService>;
  const createService = createServiceFactory(ThereseLibService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});