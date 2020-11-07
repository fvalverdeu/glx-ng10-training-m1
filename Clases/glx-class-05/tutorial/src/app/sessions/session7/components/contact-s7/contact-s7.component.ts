import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-contact-s7',
  templateUrl: './contact-s7.component.html',
  styleUrls: ['./contact-s7.component.scss']
})
export class ContactS7Component implements OnInit {

  @Input() user: IUser;
  group: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.group = this.formBuilder.group({
      email: ['', Validators.required],
      title: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  send(): void {

  }

}
