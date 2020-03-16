import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ShortlistedCandidatesComponent } from "./short-listed-candidates.component";
import { DataService } from "src/app/core/services/data.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ShortlistedJobsComponent", () => {
  let component: ShortlistedCandidatesComponent;
  let fixture: ComponentFixture<ShortlistedCandidatesComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
      declarations: [ShortlistedCandidatesComponent]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ShortlistedCandidatesComponent);
    component = fixture.componentInstance;
  });

  it(`should create component`, () => {
    expect(component).toBeTruthy();
  });

  it(`should be called getInterviews()`, () => {
    const jobData = {
      Id: 1,
      Name: "Raju",
      WorksAt: "PLM Inc",
      Experience: "6 yrs",
      CTC: "10L",
      Interviews: [
        {
          Interview: "Round#1",
          Interviewer: "Vijay",
          Date: "20-8-19",
          Result: "Selected"
        },
        {
          Interview: "HR Round",
          Interviewer: "Singh, HR",
          Date: "27-8-19",
          Result: "Offered"
        }
      ]
    };
    const spy = spyOn(component, "getInterviews").and.callThrough();
    expect(component);
    component.getInterviews(jobData);
    expect(spy);
    fixture.detectChanges();
    expect(component.getInterviews).toHaveBeenCalled();
  });
});
