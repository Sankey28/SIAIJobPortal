import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "src/app/core/services/data.service";

@Component({
  selector: "app-short-listed-jobs",
  templateUrl: "./short-listed-jobs.component.html",
  styleUrls: ["./short-listed-jobs.component.css"]
})
export class ShortlistedJobsComponent implements OnInit {
  displayedColumns: string[] = [];
  @Input()
  dataSource: any = [];
  selectedRowIndex: any;
  constructor(private dataService: DataService) {
    this.displayedColumns = ["Name", "WorksAt", "Experience", "CTC"];
  }

  ngOnInit(): void {
    this.dataSource = this.dataService.currentJob;
  }
  getInterviews(row) {
    this.dataService.currentInterview = row.Interviews;
    this.selectedRowIndex = row.Id;
  }
}
