import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DataService } from "src/app/core/services/data.service";

@Component({
  selector: "app-posted-jobs",
  templateUrl: "./posted-jobs.component.html",
  styleUrls: ["./posted-jobs.component.css"]
})
export class PostedJobsComponent implements OnInit {
  @Input()
  jobsList: any[] = [];
  displayedColumns: string[] = [];
  selectedRowIndex = 0;
  @Output()
  jobId: EventEmitter<any> = new EventEmitter();
  constructor(private dataService: DataService) {
    this.displayedColumns = ["Company", "Title", "DatePosted", "Status"];
  }

  ngOnInit(): void {
    this.getAllJobs();
  }
  getAllJobs() {
    this.dataService.getPostedJobs(this.callbackForGetEmployees.bind(this));
  }
  callbackForGetEmployees(response) {
    this.jobsList = response;
  }
  getCandidates(jobId) {
    this.jobId.emit(jobId);
    this.selectedRowIndex = jobId;
  }
}
