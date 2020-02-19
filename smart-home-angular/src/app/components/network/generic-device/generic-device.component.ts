import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../../../models/device';

@Component({
  selector: 'app-generic-device',
  templateUrl: './generic-device.component.html',
  styleUrls: ['./generic-device.component.css']
})
export class GenericDeviceComponent implements OnInit {

  @Input() device: Device;

  constructor() { }

  ngOnInit(): void {
  }

}
