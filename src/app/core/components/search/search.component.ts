import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import * as _ from "underscore";
import { Status } from "../../models/status.model";
import { SearchFilter } from "../../models/search-filter.model";
import { Jobs } from "../../models/jobs.model";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  statusList: Status[] = [];
  searchFilter: SearchFilter = new SearchFilter();
  postedJobs: Jobs[] = [];
  allJobs: Jobs[] = [];
  constructor(public dataService: DataService) {
    this.statusList.push({ Name: "Open", Value: "Open", Checked: true });
    this.statusList.push({ Name: "Closed", Value: "Closed", Checked: true });
  }

  ngOnInit(): void {
    this.getAllJobs();
  }
  getAllJobs() {
    this.dataService.getPostedJobs().subscribe(data => {
      this.allJobs = data;
      this.postedJobs = this.allJobs;
    });
  }
  searchJobs() {
    this.postedJobs = [];
    this.allJobs.forEach(job => {
      this.statusList.forEach(status => {
        if (status.Checked) {
          if (
            status.Value === job.Status &&
            (job.Company.indexOf(this.searchFilter.Title) > -1 ||
              job.Title.indexOf(this.searchFilter.Title) > -1)
          ) {
            this.postedJobs.push(job);
          }
        }
      });
    });
  }
}
