import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {ActivatedRoute, convertToParamMap, Router} from "@angular/router";
import {Practitioner} from "../Practitioner";

@Component({
  selector: 'app-practitioner-list',
  templateUrl: './practitioner-list.component.html',
  styleUrls: ['./practitioner-list.component.css'],
})
export class PractitionerListComponent implements OnInit {


  practitioners: Practitioner[] = [];
  private currentPractitioner?: Practitioner;



  constructor(
    private dataService: DataService,
    private router: Router,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.paramMap.subscribe(param => {
      const id = param.get("id");
    });
  }

  ngOnInit(): void {
    this.fetchPractitioners();
  }

  createNewPractitioner() {
    this.router.navigate(['/practitioners/'])
    this.currentPractitioner = {};

  }

  private fetchPractitioners() {
    this.dataService.getPractitioners().subscribe(practitioners => {
      this.practitioners = practitioners;
    });
  }
}
