import { Component, OnInit } from '@angular/core';
import { SeluxitService } from '../../services/seluxit.service';
import { Network } from '../../models/network';
import { Device } from '../../models/device';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  public network: Network;
  public devices: Device[];
  // Hardcoded network id 
  private myWebSocket: WebSocketSubject<Observable<Object>> = webSocket('wss://www.seluxit.com/smarthome/services/2.0/network/b8ad0243-0845-4e17-9683-b66ddfda0647/websocket');

  constructor(private seluxitService: SeluxitService) { }

  ngOnInit(): void {
    this.seluxitService.getNetwork().subscribe(response => {
      this.network = response;
      this.devices = this.network.device;
    });

    this.myWebSocket.subscribe(data => {
      console.log(data);
      this.seluxitService.getNetwork().subscribe(response => {
        this.network = response;
        this.devices = this.network.device;
      });
    });
  }
}
