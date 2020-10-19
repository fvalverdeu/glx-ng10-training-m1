import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  product = 'Producto';
  @Input() title: string;
  @Output() send: EventEmitter<string> = new EventEmitter<string>();

  @Input() nameBrother: string;
  @Output() myName: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  showName(): void {
    this.product = 'Angular';
    this.send.emit(`Hola soy ${this.title}`);
    this.myName.emit(this.title);
  }

}
