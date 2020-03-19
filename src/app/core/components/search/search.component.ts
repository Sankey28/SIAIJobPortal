import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from "@angular/core";
import { DataService } from "../../services/data.service";
import * as _ from "underscore";
import { Status } from "../../models/status.model";
import { SearchFilter } from "../../models/search-filter.model";
import { Jobs } from "../../models/jobs.model";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  statusList: Status[] = [];
  searchFilter: SearchFilter = new SearchFilter();
  @Output()
  filteredJobs: EventEmitter<any> = new EventEmitter();
  allJobs: Jobs[] = [];
  constructor(public dataService: DataService) {
    this.statusList.push({ Name: "Open", Value: "Open", Checked: true });
    this.statusList.push({ Name: "Closed", Value: "Closed", Checked: true });
  }

  ngOnInit(): void {
    this.dataService.getPostedJobs(this.callbackMethodForGetAllJobs.bind(this));
  }
  callbackMethodForGetAllJobs(response) {
    this.allJobs = response;
    this.searchJobs();
  }
  searchJobs() {
    const filteredJobs = [];
    this.allJobs.filter(job => {
      this.statusList.forEach(status => {
        if (status.Checked) {
          if (
            status.Value === job.Status &&
            (job.Company.toLowerCase().indexOf(
              this.searchFilter.Title.toLowerCase()
            ) > -1 ||
              job.Title.toLowerCase().indexOf(
                this.searchFilter.Title.toLowerCase()
              ) > -1)
          ) {
            filteredJobs.push(job.Id);
          }
        }
      });
    });
    this.filteredJobs.emit(filteredJobs);
  }
  clearTitle() {
    this.searchFilter.Title = "";
    this.ngOnInit();
  }
}
