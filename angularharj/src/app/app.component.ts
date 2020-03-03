import { Component, OnInit } from '@angular/core';
import { RestApiService } from "./shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  personData: any = {};

  constructor(

  ) {
  }

  ngOnInit() {
 
  }


}