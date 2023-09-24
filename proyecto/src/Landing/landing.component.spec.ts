import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [LandingComponent]
  }));

  it('should create the landing', () => {
    const fixture = TestBed.createComponent(LandingComponent);
    const landing = fixture.componentInstance;
    expect(landing).toBeTruthy();
  });

  it(`should have as title 'proyecto'`, () => {
    const fixture = TestBed.createComponent(LandingComponent);
    const landing = fixture.componentInstance;
    expect(landing.title).toEqual('proyecto');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LandingComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('proyecto landing is running!');
  });
});
