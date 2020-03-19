import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Jobs } from "../models/jobs.model";
@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}
  getPostedJobs(callback) {
    this.http
      .get<Jobs[]>("http://localhost:4200/assets/data.json")
      .subscribe(response => callback(response));
  }
  getJobsById(request, callback) {
    this.http
      .get<Jobs[]>("http://localhost:4200/assets/data.json")
      .pipe(
        map(response =>
          response.filter(job => request.toString().indexOf(job.Id) > -1)
        )
      )
      .subscribe(response => callback(response));
  }
  getShortListedCandidates(request, callback) {
    this.http
      .get<Jobs[]>("http://localhost:4200/assets/data.json")
      .pipe(
        map(response => response.find(job => job.Id === request).ShortListed)
      )
      .subscribe(response => callback(response));
  }
  getInterviewsDetails(request, callback) {
    this.http
      .get<Jobs[]>("http://localhost:4200/assets/data.json")
      .pipe(
        map(
          response => response.find(job => job.Id === request.JobId).ShortListed
        ),
        map(
          response =>
            response.find(candidate => candidate.Id === request.CandidateId)
              .Interviews
        )
      )
      .subscribe(response => callback(response));
  }
}
