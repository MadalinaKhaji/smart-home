import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../../../models/device';
import { SeluxitService } from 'src/app/services/seluxit.service';

@Component({
  selector: 'app-generic-device',
  templateUrl: './generic-device.component.html',
  styleUrls: ['./generic-device.component.css']
})
export class GenericDeviceComponent implements OnInit {

  @Input() device: Device;

  constructor(private seluxitService: SeluxitService) { }

  ngOnInit(): void {
  }

  editData(deviceID: string, valueID: string, stateID: string): void {
    let userInput = prompt('Edit control state:');

    if (userInput) {
      let controlState = {
        meta: {
          id: stateID
        },
        timestamp: Date.now().toString(),
        data: userInput
      };

      this.seluxitService.updateControlState(deviceID, valueID, stateID, JSON.stringify(controlState)).subscribe(response => {
        console.log(response);
      });
    }
  }

  congratulations(): void {
    alert("Congratulations! You clicked on the three dots.");
  }
}
