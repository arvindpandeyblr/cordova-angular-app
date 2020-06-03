import { TestBed } from '@angular/core/testing';

import { AppInitConfigService } from '../service/app-init-config.service';

describe('AppInit.Config.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppInitConfigService = TestBed.get(AppInitConfigService);
    expect(service).toBeTruthy();
  });
});
