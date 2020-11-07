import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-attribute',
  templateUrl: './directive-attribute.component.html',
  styleUrls: ['./directive-attribute.component.scss']
})
export class DirectiveAttributeComponent implements OnInit {

  active: boolean;
  active2: boolean;

  color = 'red';
  fontSize = '1.25rem';

  constructor() { }

  ngOnInit(): void {
  }

  toogleActive(): void {
    this.active = !this.active;
    this.active2 = !this.active2;
  }

  toogleColor(): void {
    // this.color = condicion ? valor-si-es-true : valor-si-es-false
    this.color = this.color === 'red' ? 'blue' : 'red';
    this.fontSize = this.fontSize === '1.25rem' ? '0.98rem' : '1.25rem';
  }

}
