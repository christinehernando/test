import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ThereseLibComponent } from './therese-lib.component';

describe('ThereseLibComponent', () => {
  let spectator: Spectator<ThereseLibComponent>;
  const createComponent = createComponentFactory(ThereseLibComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
