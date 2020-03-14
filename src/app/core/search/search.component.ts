import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import * as _ from 'underscore';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  statusList: Status[] = [];
  searchFilter: SearchFilter = new SearchFilter();
  postedJobs: any;
  allJobs: any;
  constructor(public dataService: DataService) {
    this.statusList.push({ Name: 'Open', Value: "Open", Checked: true });
    this.statusList.push({ Name: 'Closed', Value: "Closed", Checked: true });
  }

  ngOnInit(): void {
    this.dataService.getPostedJobs().subscribe(data => {
      this.allJobs = data;
      this.postedJobs = this.allJobs;
    })
  }
  SearchJobs() {
    this.postedJobs = [];
    this.allJobs.forEach(job => {
      this.statusList.forEach(status => {
        if (status.Checked) {
          if (status.Value === job.Status && (job.Company.Contains(this.searchFilter.Title) || job.Title.Contains(this.searchFilter.Title))) {
            this.postedJobs.push(job);;
          }
        }
      });
    });
  }
}
class Status {
  Name: string;
  Value: string;
  Checked: boolean;
}
class SearchFilter {
  Status: string[] = [];
  Title: string = "";
}
