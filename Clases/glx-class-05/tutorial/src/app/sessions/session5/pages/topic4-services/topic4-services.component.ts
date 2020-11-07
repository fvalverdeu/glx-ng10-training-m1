import { Component, OnInit } from '@angular/core';

import { DateService } from '../../../../shared/services/date.service';

@Component({
  selector: 'app-topic4-services',
  templateUrl: './topic4-services.component.html',
  styleUrls: ['./topic4-services.component.scss']
})
export class Topic4ServicesComponent implements OnInit {

  date: string;

  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this.date = this.dateService.getCurrentDate();
  }

}
