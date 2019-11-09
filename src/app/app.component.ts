import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ApiService } from '../../src/app/provider/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  label: string = "Submit"
  listData;
  constructor(
    public httpAPI: ApiService
  ) { }

  functioncall(event) {
    console.log('functioncall', event);
    this.gettingDetails();
  }

  gettingDetails() {
    this.httpAPI.getDetails().then((data) => {
      console.log("all data: ", data);
      this.listData = data;
    }).catch((error) => {
      console.log(error);
    });
  }

  title = 'my-first-project';
}
