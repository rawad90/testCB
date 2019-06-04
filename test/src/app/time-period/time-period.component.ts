import { Component, OnInit } from '@angular/core';
import { TimePeriod } from '../models/time-period';
import { DataService } from '../data.service';

@Component({
  selector: 'app-time-period',
  templateUrl: './time-period.component.html',
  styleUrls: ['./time-period.component.css']
})
export class TimePeriodComponent implements OnInit {
  timePeriodList: TimePeriod[] = []
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.timePeriodList = this.dataService.getTimePeriod();

  }

  checklistChanged(isChecked: boolean , timePeriodName: string): void {
    this.dataService.timePeriodlistChanged(isChecked, timePeriodName);
  }

}
