import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic4-data-binding',
  templateUrl: './topic4-data-binding.component.html',
  styleUrls: ['./topic4-data-binding.component.scss']
})
export class Topic4DataBindingComponent implements OnInit {

  textoInput: string;

  constructor() { }

  ngOnInit(): void {
  }

  getTexto(texto: string): void {
    this.textoInput = texto;
  }

}
