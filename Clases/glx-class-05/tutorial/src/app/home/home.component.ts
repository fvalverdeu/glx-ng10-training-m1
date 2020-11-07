import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sessions: object[] = [
    { title: 'Sesión 1', url: '/session1' },
    { title: 'Sesión 2', url: '/session2' },
    { title: 'Sesión 3', url: '/session3' },
    { title: 'Sesión 4', url: '/session4' },
    { title: 'Sesión 5', url: '/session5' },
    { title: 'Sesión 6', url: '/session6' },
    { title: 'Sesión 7', url: '/session7' },
    { title: 'Sesión 8', url: '/session8' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
