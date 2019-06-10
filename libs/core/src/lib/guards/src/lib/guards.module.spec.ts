import { async, TestBed } from '@angular/core/testing';
import { GuardsModule } from './guards.module';

describe('CoreSrcLibGuardsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GuardsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GuardsModule).toBeDefined();
  });
});
