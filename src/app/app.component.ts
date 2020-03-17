import { Component, OnInit } from "@angular/core";
import { DataService } from "./core/services/data.service";
import { Jobs } from "./core/models/jobs.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  allJobs: Jobs[] = [];
  postedJobs: Jobs[] = [];
  shortListedCandidates: any[] = [];
  candidateInterviews: any = [];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.getAllJobs();
  }
  getAllJobs() {
    this.dataService.getPostedJobs().subscribe(data => {
      this.allJobs = data;
    });
  }
  getPostedJobs(jobs) {
    this.postedJobs = jobs;
  }
  getShortListedCandidates(shortlistedCandidates) {
    this.shortListedCandidates = shortlistedCandidates;
  }
  getInterviewsInformation(candidateInterviews) {
    this.candidateInterviews = candidateInterviews;
  }
}
