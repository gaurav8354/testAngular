import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  student = 'Chinu';
  numA = '';
  numB = '';
  numValue = 0;
  opr = '';
  mySelect = '2';
  operation = '';

  data = [
    { operator: '+' },
    { operator: '-' },
    { operator: '*' },
    { operator: '/' },
  ];
  selectChange() {
    console.log(this.mySelect);
    this.numValue = 0;
    this.getOperatorValue(true);
  }
  calculate() {
    this.getOperatorValue(false);
  }

  getOperatorValue(x) {
    switch (this.mySelect) {
      case '+':
        if (x) {
          this.operation = 'Sum';
        } else {
          this.numValue = parseInt(this.numA) + parseInt(this.numB);
        }
        break;
      case '-':
        if (x) {
          this.operation = 'Subtraction';
        } else {
          this.numValue = parseInt(this.numA) - parseInt(this.numB);
        }
        break;
      case '*':
        if (x) {
          this.operation = 'Multiplication';
        } else {
          this.numValue = parseInt(this.numA) * parseInt(this.numB);
        }
        break;
      case '/':
        if (x) {
          this.operation = 'Division';
        } else {
          this.numValue = parseInt(this.numA) / parseInt(this.numB);
        }
        break;
      default:
        break;
    }
  }
  // title = 'Gauri App';
  // name = 'Chinu';
  // firstName = 'Gauri';
  // lastName = 'xyz';
  // myClass = 'b';
  // myColorA = 'Blue';

  // a = 10;
  // b = 20;
  // c = 30;
}
