import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Protocol } from '../models/protocol';

@Component({
  selector: 'app-selec-protocols',
  templateUrl: './selec-protocols.component.html',
  styleUrls: ['./selec-protocols.component.css']
})
export class SelecProtocolsComponent implements OnInit {
  protocolList: Protocol[] = []

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.protocolList = this.dataService.getProtocolList();
  }


  checklistChanged(isChecked: boolean , protocolName: string): void {
    this.dataService.protocollistChanged(isChecked, protocolName);
  }
 
}
