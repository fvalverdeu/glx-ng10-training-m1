import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('myForm') form: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // send(myForm): void {
  //   console.log(myForm);
  // }

  send(): void {
    console.log(this.form);
  }

}
