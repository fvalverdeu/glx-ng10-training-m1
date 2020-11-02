import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnChanges, OnDestroy {

  @Input() value = 0;
  @Output() log: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.log.emit('constructor');
  }

  ngOnDestroy(): void {
    this.log.emit('ngOnDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.log.emit(`ngOnChanges ${JSON.stringify(changes)}`);
  }

  ngOnInit(): void {
    this.log.emit('ngOnInit');
  }

  increment(): void {
    this.value += 1;
  }

  decrement(): void {
    this.value -= 1;
  }

}
