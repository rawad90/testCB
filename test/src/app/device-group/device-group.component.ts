import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DeviceGroup } from '../models/device-group';

@Component({
  selector: 'app-device-group',
  templateUrl: './device-group.component.html',
  styleUrls: ['./device-group.component.css']
})
export class DeviceGroupComponent implements OnInit {

  deviceGroupList: DeviceGroup[] = []
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.deviceGroupList = this.dataService.getDeviceGroup();
  }

  checklistChanged(isChecked: boolean , deviceGroupName: string): void {
    this.dataService.deviceGroupListChanged(isChecked, deviceGroupName);
  }
}
