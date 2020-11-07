import { Component, OnInit } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-session6',
  templateUrl: './session6.component.html',
  styleUrls: ['./session6.component.scss']
})
export class Session6Component implements OnInit {

  urlTree: UrlTree;
  state: string;
  code: string;

  constructor(private router: Router) {
    this.urlTree = this.router.parseUrl(this.router.url);

    this.state = this.urlTree.queryParams['state'];
    this.code = this.urlTree.queryParams['code'];
  }

  ngOnInit(): void {
    console.log('state:', this.state);
    console.log('code:', this.code);
  }

}
