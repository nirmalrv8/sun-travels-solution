import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-view-contract',
  templateUrl: './view-contract.component.html',
  styleUrls: ['./view-contract.component.css']
})
export class ViewContractComponent implements OnInit {

  private dataSet: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const obs = this.http.get('http://localhost:8080/rooms/view');
    obs.subscribe((response) => {
      this.dataSet = response;
    });
  }

}
