import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  protected values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.getValues();
  }

  getValues() {
    console.log('getValues');
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
      console.log('getValues return');
    }, error => {
      console.log('error: ', error);
    });
  }
}
