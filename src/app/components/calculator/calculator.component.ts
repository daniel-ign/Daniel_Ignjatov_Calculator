import { Component, HostListener, OnInit } from '@angular/core';
import { KEY_CODE } from 'src/app/enums/KEY_CODES';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public result = '';

  constructor() { }

  ngOnInit(): void {
  }

  public numClick(number: string){
    this.result += number;
  }

  public operatorClick(opr: string){
    this.result += opr;
  }

  public calculate(){
    this.result = eval(this.result);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.keyCode) {
      case KEY_CODE.KEY_0:
        this.numClick('0');
        break;
      case KEY_CODE.KEY_1:
        this.numClick('1');
        break;
      case KEY_CODE.KEY_2:
        this.numClick('2');
        break;
      case KEY_CODE.KEY_3:
        this.numClick('3');
        break;
      case KEY_CODE.KEY_4:
        this.numClick('4');
        break;
      case KEY_CODE.KEY_5:
        this.numClick('5');
        break;
      case KEY_CODE.KEY_6:
        this.numClick('6');
        break;
      case KEY_CODE.KEY_7:
        this.numClick('7');
        break;
      case KEY_CODE.KEY_8:
        this.numClick('8');
        break;
      case KEY_CODE.KEY_9:
        this.numClick('9');
        break;
      case KEY_CODE.KEY_DIVIDE:
        this.operatorClick('/');
        break;
      case KEY_CODE.KEY_MULTIPLE:
        this.operatorClick('*');
        break;
      case KEY_CODE.KEY_MINUS:
        this.operatorClick('-');
        break;
      case KEY_CODE.KEY_PLUS:
        this.operatorClick('+');
        break;
    }
  }
}
