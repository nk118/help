import { TestBed } from '@angular/core/testing';
import { Page1Component } from './page1.component';

describe('Page1Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page1Component],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Page1Component);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'my-new-project' title`, () => {
    const fixture = TestBed.createComponent(Page1Component);
    const app = fixture.componentInstance;
   
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Page1Component);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, my-new-project');
  });
});
