import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-estructure',
  templateUrl: './directive-estructure.component.html',
  styleUrls: ['./directive-estructure.component.scss']
})
export class DirectiveEstructureComponent implements OnInit {

  show: boolean;
  phoneList: string[] = ['204-365-6176 x4121', '1-814-884-5049', '1-816-216-5954 x12891'];
  persons: object[] = [
    { name: 'Callie', company: 'Fadel - Bahringer' },
    { name: 'Hailee', company: 'Volkman and Sons' },
    null,
    { name: 'Joy', company: 'Bahringer - Williamson' },
    { name: 'Georgiana', company: 'Koepp LLC' }
  ];

  value: number;

  constructor() { }

  ngOnInit(): void {
  }

  toogleShow(): void {
    this.show = !this.show;
  }

  setValue(value: number): void {
    this.value = value;
  }
}
