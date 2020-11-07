import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test4',
  template: `
    <div class="container">
      <p>fñkldsfjñasfjsñfkldsajñfklasjfñslkfjsñafsd</p>
    </div>
  `,
  styles: [`
    .container {
      background-color: red;
      width: 200px;
    }
  `]
})
export class Test4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
