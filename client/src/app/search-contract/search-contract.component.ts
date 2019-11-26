import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-contract',
  templateUrl: './search-contract.component.html',
  styleUrls: ['./search-contract.component.css']
})
export class SearchContractComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getDetails() {
    const obs = this.http.get('http://localhost:8080/rooms/view');
    obs.subscribe((response) => console.log(response));
  }
}
