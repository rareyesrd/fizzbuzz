import { Component, Input, OnInit } from '@angular/core';
import { Solution } from 'src/app/shared/solution';

@Component({
  selector: 'app-solution-ouput',
  templateUrl: './solution-ouput.component.html',
  styleUrls: ['./solution-ouput.component.scss']
})
export class SolutionOuputComponent implements OnInit {
  @Input() solution: Solution = { number: 0, result: 'initial' };
  numberSelected = 0;
  constructor() { }

  ngOnInit(): void {
  }
  flipResult(num: number): void {
    if (this.numberSelected > 0) {
      this.numberSelected = 0;
    } else {
      this.numberSelected = num;
    }
  }
}
