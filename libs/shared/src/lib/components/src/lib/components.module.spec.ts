import { async, TestBed } from '@angular/core/testing';
import { ComponentsModule } from './components.module';

describe('SharedSrcLibComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ComponentsModule).toBeDefined();
  });
});
