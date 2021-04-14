import { Component, OnInit } from '@angular/core';
import { Solution } from '../shared/solution';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements OnInit {
  solution = 'Solution';
  firstNumber = 1;
  lastNumber = 100;
  solutionResult: Solution[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = this.firstNumber; i <= this.lastNumber; i++) {
      this.fizzBuzz(i);
    }
  }

  fizzBuzz(num: number): string {
    if (this.divisibleBy(num, 15)) {
      this.solutionResult.push({ number: num, result: 'FizzBuzz' });
      return 'FizzBuzz';
    }
    else if (this.divisibleBy(num, 3)) {
      this.solutionResult.push({ number: num, result: 'Fizz' });
      return 'Fizz';
    }
    else if (this.divisibleBy(num, 5)) {
      this.solutionResult.push({ number: num, result: 'Buzz' });
      return 'Buzz';
    }
    this.solutionResult.push({ number: num, result: `${num}` });
    return `${num}`;
  }

  divisibleBy(current: number, divideNumber: number): boolean {
    if (current % divideNumber === 0) {
      return true;
    }
    return false;
  }


}
