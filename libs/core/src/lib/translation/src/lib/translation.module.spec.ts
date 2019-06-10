import { async, TestBed } from '@angular/core/testing';
import { TranslationModule } from './translation.module';

describe('CoreSrcLibTranslationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TranslationModule).toBeDefined();
  });
});
