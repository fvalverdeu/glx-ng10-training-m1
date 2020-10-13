import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  test = '';
  name = '';
  cards = ['Emery', 'Dannie', 'Margret', 'Dawn', 'Velda', 'Mona'];

  constructor() { }

  ngOnInit(): void {
  }

  getTitle(title: string): void {
    this.test = title;
  }

  sendName(name: string): void {
    this.name = name;
  }

}
