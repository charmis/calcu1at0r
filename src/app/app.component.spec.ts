import { DebugElement } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StandardCalculatorComponent } from './standard-calculator/standard-calculator.component';
import {CalculatorService} from './calculator.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StandardCalculatorComponent
      ],
      providers: [CalculatorService],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Calculator'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Calculator');
  }));

  it('should render app-standard-calculator tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerEl: HTMLElement = bannerDe.nativeElement;
    const standardCalcComponent = bannerEl.querySelector('app-standard-calculator');
    expect(standardCalcComponent).not.toBe(null);
  }));
});
