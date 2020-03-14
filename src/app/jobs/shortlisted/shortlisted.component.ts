import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-shortlisted',
  templateUrl: './shortlisted.component.html',
  styleUrls: ['./shortlisted.component.css']
})
export class ShortlistedComponent implements OnInit {
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
