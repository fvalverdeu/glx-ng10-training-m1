import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  group: FormGroup;

  constructor() {
    this.group = new FormGroup({
      email: new FormControl('fvalverdeu@gmail.com', Validators.required),
      title: new FormControl(),
      message: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  send(): void {
    // console.log(this.group);
    // console.log(this.group.get('email'));
    console.log(this.group.get('email').value);
  }

}
