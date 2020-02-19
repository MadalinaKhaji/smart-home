import { Component, OnInit } from '@angular/core';
import { SeluxitService } from '../../services/seluxit.service';
import { Network } from '../../models/network';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  private data: Object;

  constructor(private seluxitService: SeluxitService) { }

  ngOnInit(): void {
    this.seluxitService.getNetwork().subscribe(data => {
      this.data = data
    });
  }

  logData(): void {
    console.log(this.data);
  }

}
