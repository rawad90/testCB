import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Protocol } from './models/protocol';
import { TimePeriod } from './models/time-period';
import { DeviceGroup } from "./models/device-group";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private isChecked = true;
  checked$ = new BehaviorSubject(true);
  protocolList: Protocol[] = [ {name: 'Modulus', isChecked: false},  {name: 'DNP 3', isChecked: false}, {name: 'IEC104 3', isChecked: false}, {name: 'MMS', isChecked: false} ];
  protocolList$ = new BehaviorSubject(this.protocolList);
  timeperiodlList: TimePeriod[] = [ {name: 'last 30 minutes', isChecked: false},  {name: 'last hour', isChecked: false}, {name: 'last 8 hour', isChecked: false}, {name: 'last 24 hour', isChecked: false} ];
  timeperiodlList$ = new BehaviorSubject(this.timeperiodlList);
  deviceGroupList: DeviceGroup[] = [{name:'device 11', isChecked: false}, {name:'device 12', isChecked: false}, {name:'device 13', isChecked: false}, {name:'device 14', isChecked: false}];
  deviceGroupList$ = new BehaviorSubject(this.deviceGroupList);

  // to json:   abc.json()
  constructor() { }

  public toggleChecked() {
    this.isChecked = !this.isChecked;
    this.checked$.next(this.isChecked);
  }

  public getCheckedObs(): Observable<boolean> {
    // return of(this.isChecked);
    return this.checked$.asObservable();
  }

  getProtocolList(): Protocol[]{
    return this.protocolList;
  }

  getTimePeriod(): TimePeriod[]{
    return this.timeperiodlList;
  }

  getDeviceGroup(): DeviceGroup[] {
   return this.deviceGroupList; 
  }

  protocollistChanged(isChecked: boolean , protocolName: string): void{
    for(let i = 0; i < this.protocolList.length; i++){
      if(this.protocolList[i].name === protocolName){
        this.protocolList[i].isChecked = isChecked;
      }
    }

    this.protocolList$.next(this.protocolList);
  }

  timePeriodlistChanged(isChecked: boolean , timePeriodName: string): void{
    for(let i = 0; i < this.timeperiodlList.length; i++){
      if(this.timeperiodlList[i].name === timePeriodName){
        this.timeperiodlList[i].isChecked = isChecked;
      }
    }

    this.timeperiodlList$.next(this.timeperiodlList);
  }

  deviceGroupListChanged(isChecked: boolean, deviceGroupName: string): void{
    for(let i = 0; i < this.deviceGroupList.length; i++){
      if(this.deviceGroupList[i].name === deviceGroupName){
        this.deviceGroupList[i].isChecked = isChecked;
      }
    }

    this.deviceGroupList$.next(this.deviceGroupList);
  }

  getProtocolListObs(): Observable<Protocol[]>{
    return this.protocolList$.asObservable();
  }

  getDeviceGroupObs(): Observable<DeviceGroup[]>{
    return this.deviceGroupList$.asObservable();
  }
}
