import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.scss']
})
export class LifeCycleHooksComponent {

  logs: string[] = [];

  show = true;
  count = 1;

  constructor() {
  }

  addCount(): void {
    this.count += 1;
  }

  addLog(log: string): void {
    this.logs.push(log);
  }

  toggleShow(): void {
    this.show = !this.show;
  }

}
