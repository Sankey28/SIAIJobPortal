import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "src/app/core/services/data.service";

@Component({
  selector: "app-short-listed-candidates",
  templateUrl: "./short-listed-candidates.component.html",
  styleUrls: ["./short-listed-candidates.component.css"]
})
export class ShortlistedCandidatesComponent implements OnInit {
  displayedColumns: string[] = [];
  @Input()
  shortListedCandidates: any = [];
  selectedRowIndex: any;
  constructor(private dataService: DataService) {
    this.displayedColumns = ["Name", "WorksAt", "Experience", "CTC"];
  }

  ngOnInit(): void {
    this.shortListedCandidates = this.dataService.shortListedCandidates;
  }
  getInterviews(row) {
    this.dataService.currentInterview = row.Interviews;
    this.selectedRowIndex = row.Id;
  }
}
