import { async, TestBed } from '@angular/core/testing';
import { AuthenticationModule } from './authentication.module';

describe('CoreSrcLibAuthenticationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthenticationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AuthenticationModule).toBeDefined();
  });
});
