import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Protocol } from '../models/protocol';
import { TimePeriod } from '../models/time-period';
import { DeviceGroup } from '../models/device-group';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, OnDestroy {

  protocolList: Protocol[] = [];
  timerPeriodList: TimePeriod[] = [];
  deviceGroupList: DeviceGroup[] = [];
  constructor(private dataService: DataService) { }
 


  ngOnInit() {
    this.dataService.getProtocolListObs()
    .subscribe( (protocols: Protocol[]) => {
      this.protocolList = protocols;
      this.protocolList = this.protocolList.filter(item => item.isChecked);
    });

    this.dataService.timeperiodlList$
      .subscribe((timeList: TimePeriod[])=>{
        this.timerPeriodList = timeList;
        this.timerPeriodList = this.timerPeriodList.filter(item => item.isChecked);
    })

    this.dataService.getDeviceGroupObs()
    .subscribe((deviceGroup: DeviceGroup[])=>{
      this.deviceGroupList = deviceGroup;
      this.deviceGroupList = this.deviceGroupList.filter(item =>item.isChecked);
    })
  }

  ngOnDestroy(): void {
  }

}
