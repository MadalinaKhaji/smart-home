import { Component, OnInit } from '@angular/core';
import { SeluxitService } from '../../services/seluxit.service';
import { Network } from '../../models/network';
import { Device } from '../../models/device';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  public network: Network;
  public devices: Device[];

  constructor(private seluxitService: SeluxitService) { }

  ngOnInit(): void {
    this.seluxitService.getNetwork().subscribe(response => {
      this.network = response;
      this.devices = this.network.device;

      if (this.network.device) {
        console.log("Devices were found");
      }

      console.log(this.network.device[0].value[3].state[0].data);
    });
  }
}
