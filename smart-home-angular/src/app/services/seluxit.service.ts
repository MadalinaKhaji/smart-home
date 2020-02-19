import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Network } from '../models/network';
import { Device } from '../models/device';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeluxitService {

  private networkID: string = "b8ad0243-0845-4e17-9683-b66ddfda0647";

  private apiURL: string = `smarthome/services/2.0/network/${this.networkID}`;

  constructor(private httpClient: HttpClient) { }

  getNetwork(): Observable<Network> {
    return this.httpClient.get<Network>(this.apiURL);
  }

  getDevice(deviceID?: string): Observable<Device> {
    return this.httpClient.get<Device>(`${this.apiURL}/device/${deviceID}`);
  }
}
