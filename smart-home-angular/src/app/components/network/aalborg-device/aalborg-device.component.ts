import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aalborg-device',
  templateUrl: './aalborg-device.component.html',
  styleUrls: ['./aalborg-device.component.css']
})
export class AalborgDeviceComponent implements OnInit {

  public randomNumber: number;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.randomNumber = Math.random();
    }, 5000);
  }

}
