import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addContract(paras: any) {
    const obs = this.http.post('http://localhost:8080/rooms/load', paras);
    obs.subscribe((res) => {
      alert('adding success');
    });
  }
}
