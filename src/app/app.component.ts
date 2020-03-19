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
  jobId: number;
  constructor(private dataService: DataService) {}
  ngOnInit() {}

  getFilteredJobs(jobs) {
    this.dataService.getJobsById(
      jobs,
      this.callbackMethodForGetFilteredJobs.bind(this)
    );
  }
  callbackMethodForGetFilteredJobs(response) {
    this.postedJobs = response;
  }
  getShortListedCandidates(jobId) {
    this.jobId = jobId;
  }
  getInterviewsInformation(candidateInfo) {
    this.dataService.getInterviewsDetails(
      candidateInfo,
      this.callbackMethodForGetInterviewsDetails.bind(this)
    );
  }
  callbackMethodForGetInterviewsDetails(response) {
    this.candidateInterviews = response;
  }
}
