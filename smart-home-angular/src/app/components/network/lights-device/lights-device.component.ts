import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lights-device',
  templateUrl: './lights-device.component.html',
  styleUrls: ['./lights-device.component.css']
})
export class LightsDeviceComponent implements OnInit {

  public isOn: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isOn = false;
  }

}
