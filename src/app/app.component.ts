import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cleanCode-practice';
  kataTitle = 'Fizzbuzz number';
  kataDescription = 'Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".For numbers which are multiples of both three and five print "FizzBuzz".';
  outputExample = '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz...';
  haveToPass = 'The app have to pass all this test';
  testList = [
    'For number one, result must be 1.',
    'For number three, result must be "Fizz".',
    'For number five, result must be "Buzz".',
    'For number fifteen, result must be "FizzBuzz".',
    'For multiplies of three, must return "Fizz".',
    'For multiplies of five, must return "Buzz".',
    'For multiplies of fifteen, must return "FizzBuzz".',
    'For the rest of numbers, must return the number.',
  ];
}
