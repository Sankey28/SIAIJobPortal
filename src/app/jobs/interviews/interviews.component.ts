import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-interviews",
  templateUrl: "./interviews.component.html",
  styleUrls: ["./interviews.component.css"]
})
export class InterviewsComponent implements OnInit {
  displayedColumns: string[] = [];
  @Input()
  candidateInterviews: any = [];
  constructor() {
    this.displayedColumns = ["Interview", "Interviewer", "Date", "Result"];
  }

  ngOnInit(): void {}
}
