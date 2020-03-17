import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
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
  @Output()
  candidateInterviews: EventEmitter<any> = new EventEmitter();
  constructor() {
    this.displayedColumns = ["Name", "WorksAt", "Experience", "CTC"];
  }

  ngOnInit(): void {}
  getInterviews(row) {
    this.candidateInterviews.emit(row.Interviews);
    this.selectedRowIndex = row.Id;
  }
}
