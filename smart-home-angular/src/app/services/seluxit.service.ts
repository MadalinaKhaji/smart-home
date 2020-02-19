import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Network } from '../models/network';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeluxitService {

  private networkID: string = "b8ad0243-0845-4e17-9683-b66ddfda0647";

  private apiURL: string = "/smarthome/services/2.0/network/b8ad0243-0845-4e17-9683-b66ddfda0647";


  constructor(private httpClient: HttpClient) { }

  public getNetwork(): Observable<Object> {
    return this.httpClient.get(this.apiURL, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '*',
        'Access-Control-Allow-Origin': '*'
      })
    });
  }
}
