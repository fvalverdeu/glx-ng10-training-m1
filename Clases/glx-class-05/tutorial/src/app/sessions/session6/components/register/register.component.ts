import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  group: FormGroup;
  valid = false;

  get fullNameField(): FormControl {
    return this.group.get('fullName') as FormControl;
  }

  get emailField(): FormControl {
    return this.group.get('email') as FormControl;
  }

  get passwordField(): FormControl {
    return this.group.get('password') as FormControl;
  }

  get confirmField(): FormControl {
    return this.group.get('confirm') as FormControl;
  }

  constructor(private fb: FormBuilder) {
    this.group = this.fb.group({
      // fullName: ['fvalverdeu@gmail.com', Validators.required],
      fullName: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
      password: ['', Validators.required],
      confirm: ['', [Validators.required, this.confirmPassword]]
    });
  }

  ngOnInit(): void {
    // console.log(this.group);
  }

  send(): void {
    console.log(this.group);
  }

  // confirmPassword(formControl: FormControl): { [s: string]: string | boolean } {
  confirmPassword(formControl: AbstractControl): { [s: string]: string } {
    if (!formControl || !formControl.parent) {
      // console.log(this.group);
      return null;
    }
    // const password = this.group.get('password');
    // const confirm = this.group.get('confirm');
    const password = formControl.parent.get('password');
    const confirm = formControl.parent.get('confirm');

    if (password && password.value && confirm && confirm.value) {
      if (password.value !== confirm.value){
        return { confirmpassword: 'Las contraseñas no coinciden' };
      }
      return null;
    }
    return null;
  }

}
