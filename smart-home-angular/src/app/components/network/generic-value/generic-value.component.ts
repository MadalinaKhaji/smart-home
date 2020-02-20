import { Component, OnInit, Input } from '@angular/core';
import { Device } from 'src/app/models/device';
import { Value } from 'src/app/models/value';
import { SeluxitService } from 'src/app/services/seluxit.service';

@Component({
  selector: 'app-generic-value',
  templateUrl: './generic-value.component.html',
  styleUrls: ['./generic-value.component.css']
})
export class GenericValueComponent implements OnInit {

  @Input() device: Device;

  @Input() value: Value;

  private data: string;

  constructor(private seluxitService: SeluxitService) { }

  ngOnInit(): void {
    this.value.state.forEach(state => {
      if (this.value.number && state.type === 'Report') {
        state.data = parseInt(Number(state.data).toFixed(2)).toString();
        state.timestamp = this.timeSince(state.timestamp);
      }
    });
  }

  /* Credit to: http://www.samantsingh.com/blogs/post/how-to-format-time-since-xxx-e-g-2-minutes-ago-/*/
  timeSince(dateString) {
    var rightNow = new Date();
    var dd = new Date(dateString);
    var gmtToLocal = dd.toLocaleString();
    var then = new Date(gmtToLocal);
    // var then = convertLocalDateToUTCDate(dateString, false);

    var diff = Math.abs((rightNow.getTime() - then.getTime()) / 1000);
    var second = 1,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24,
      week = day * 7;

    if (isNaN(diff) || diff < 0) {
      return ""; // return blank string if unknown
    }

    if (diff < second * 2) {
      // within 2 seconds
      return "right now";
    }

    if (diff < minute) {
      return Math.floor(diff / second) + " seconds ago";
    }

    if (diff < minute * 2) {
      return "about 1 minute ago";
    }

    if (diff < hour) {
      return Math.floor(diff / minute) + " minutes ago";
    }

    if (diff < hour * 2) {
      return "about 1 hour ago";
    }

    if (diff < day) {
      return Math.floor(diff / hour) + " hours ago";
    }

    if (diff > day && diff < day * 2) {
      return "yesterday";
    }

    if (diff < day * 365) {
      return Math.floor(diff / day) + " days ago";
    }

    else {
      return "over a year ago";
    }
  }

  editData(deviceID: string, valueID: string, stateID: string): void {
    let userInput = prompt('Edit control state:');

    if (userInput) {
      let controlState = {
        meta: {
          id: stateID
        },
        timestamp: Date.now().toLocaleString(),
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
