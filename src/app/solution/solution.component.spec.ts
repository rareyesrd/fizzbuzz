import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionComponent } from './solution.component';

describe('SolutionComponent', () => {
  let component: SolutionComponent;
  let fixture: ComponentFixture<SolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolutionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

fdescribe('FizzBuzz', () => {
  it('Should return 1 when current number is 1', () => {
    const solution = new SolutionComponent();
    const expected = '1';
    const result = solution.fizzBuzz(1);
    expect(result).toBe(expected);
  });
  it('Should return Fizz when current number is 3', () => {
    const solution = new SolutionComponent();
    const expected = 'Fizz';
    const result = solution.fizzBuzz(3);
    expect(result).toBe(expected);
  });
  it('Should return Buzz when current number is 5', () => {
    const solution = new SolutionComponent();
    const expected = 'Buzz';
    const result = solution.fizzBuzz(5);
    expect(result).toBe(expected);
  });
  it('Should return FizzBuzz when current number is 15', () => {
    const solution = new SolutionComponent();
    const expected = 'FizzBuzz';
    const result = solution.fizzBuzz(15);
    expect(result).toBe(expected);
  });
  it('Should return number for the rest of numbers', () => {
    const solution = new SolutionComponent();
    const expected = '8';
    const result = solution.fizzBuzz(8);
    expect(result).toBe(expected);
  });
});
