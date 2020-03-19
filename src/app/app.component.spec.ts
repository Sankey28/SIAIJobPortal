import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { DataService } from "./core/services/data.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const dummyJobs: any[] = [
    {
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
          CTC: "12L",
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
        }
      ]
    },
    {
      Id: 2,
      Company: "XYZ",
      Title: "DBA",
      DatePosted: "16-6-18",
      Status: "Closed",
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
          CTC: "12L",
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
        }
      ]
    }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [DataService],
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it("should create the app", () => {
    expect(component).toBeTruthy();
  });

  it(`should capture shortlisted candidates`, () => {
    const initialValue = component.jobId;
    component.getShortListedCandidates(dummyJobs[0].Id);
    fixture.detectChanges();
    expect(component.jobId).not.toEqual(initialValue);
  });
});
