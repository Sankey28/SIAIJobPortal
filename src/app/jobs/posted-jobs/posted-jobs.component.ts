import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "src/app/core/services/data.service";

@Component({
  selector: "app-posted-jobs",
  templateUrl: "./posted-jobs.component.html",
  styleUrls: ["./posted-jobs.component.css"]
})
export class PostedJobsComponent implements OnInit {
  @Input()
  JobsList: any[] = [];
  displayedColumns: string[] = [];
  selectedRowIndex = 0;
  constructor(private dataService: DataService) {
    this.displayedColumns = ["Company", "Title", "DatePosted", "Status"];
  }

  ngOnInit(): void {}
  getJob(job) {
    this.dataService.currentJob = job.ShortListed;
    this.selectedRowIndex = job.Id;
  }
}
