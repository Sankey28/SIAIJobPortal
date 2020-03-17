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
  shortListedCandidates: EventEmitter<any> = new EventEmitter();
  constructor() {
    this.displayedColumns = ["Company", "Title", "DatePosted", "Status"];
  }

  ngOnInit(): void {}
  getCandidates(job) {
    this.shortListedCandidates.emit(job.ShortListed);
    this.selectedRowIndex = job.Id;
  }
}
