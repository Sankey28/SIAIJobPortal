import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from "@angular/core";
import { DataService } from "src/app/core/services/data.service";
import { ShortListedCandidates } from "src/app/core/models/short-listed-candidates.model";

@Component({
  selector: "app-short-listed-candidates",
  templateUrl: "./short-listed-candidates.component.html",
  styleUrls: ["./short-listed-candidates.component.css"]
})
export class ShortlistedCandidatesComponent implements OnInit, OnChanges {
  displayedColumns: string[] = [];
  @Input()
  jobId: number;
  selectedRowIndex: any;
  @Output()
  candidateInfo: EventEmitter<any> = new EventEmitter();
  shortListedCandidates: ShortListedCandidates[] = [];
  constructor(private dataService: DataService) {
    this.displayedColumns = ["Name", "WorksAt", "Experience", "CTC"];
  }

  ngOnInit(): void {}
  getInterviews(candidateId) {
    this.candidateInfo.emit({
      CandidateId: candidateId,
      JobId: this.jobId
    });
    this.selectedRowIndex = candidateId;
  }
  ngOnChanges() {
    this.getShortListedCandidates(this.jobId);
  }
  getShortListedCandidates(jobId) {
    this.jobId = jobId;
    this.dataService.getShortListedCandidates(
      jobId,
      this.callbackMethodForGetShortlistedCandidates.bind(this)
    );
  }
  callbackMethodForGetShortlistedCandidates(response) {
    this.shortListedCandidates = response;
  }
}
