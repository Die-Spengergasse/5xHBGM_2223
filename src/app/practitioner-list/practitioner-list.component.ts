import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {ActivatedRoute, convertToParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-practitioner-list',
  templateUrl: './practitioner-list.component.html',
  styleUrls: ['./practitioner-list.component.css'],
})
export class PractitionerListComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private router: Router,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.paramMap.subscribe(param => {
      const id = param.get("id");
    });
  }

  ngOnInit(): void {}
}
