import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PostedJobsComponent } from "./posted-jobs.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { DataService } from "src/app/core/services/data.service";

describe("PostedJobsComponent", () => {
  let component: PostedJobsComponent;
  let fixture: ComponentFixture<PostedJobsComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
      declarations: [PostedJobsComponent]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(PostedJobsComponent);
    component = fixture.componentInstance;
  });

  it(`should create component`, () => {
    expect(component).toBeTruthy();
  });
  it(`should be called getInterviews()`, () => {
    const jobData = {
      Id: 1,
      Company: "IT Soft",
      Title: "Java Engineer",
      DatePosted: "20-8-19",
      Status: "Open",
      ShortListed: [
        {
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
        },
        {
          Id: 2,
          Name: "Abhay",
          WorksAt: "SysTel",
          Experience: "10 yrs",
          CTC: "12L"
        }
      ]
    };
    const spy = spyOn(component, "getCandidates").and.callThrough();
    expect(component);
    component.getCandidates(jobData);
    expect(spy);
    fixture.detectChanges();
    expect(component.getCandidates).toHaveBeenCalled();
  });
});
