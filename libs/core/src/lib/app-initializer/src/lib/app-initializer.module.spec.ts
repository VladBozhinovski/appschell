import { async, TestBed } from '@angular/core/testing';
import { AppInitializerModule } from './app-initializer.module';

describe('CoreSrcLibAppInitializerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppInitializerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AppInitializerModule).toBeDefined();
  });
});
