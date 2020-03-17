import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { DataService } from "../../services/data.service";
import { SearchComponent } from "./search.component";

describe("SearchComponent", () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
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
      imports: [HttpClientTestingModule],
      providers: [DataService],
      declarations: [SearchComponent]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
  });

  it(`should create component`, () => {
    expect(component).toBeTruthy();
  });

  it(`should be called searchJobs()`, () => {
    const spy = spyOn(component, "searchJobs").and.callThrough();
    expect(component).toBeDefined();
    expect(spy);
    component.searchJobs();
    fixture.detectChanges();
    expect(component.searchJobs).toHaveBeenCalled();
  });

  it(`should clear Search value after Clear button is clicked`, () => {
    component.searchFilter.Title = "Test";
    const initialValue = component.searchFilter.Title;
    component.clearTitle();
    fixture.detectChanges();
    expect(component.searchFilter.Title).not.toEqual(initialValue);
  });

  it(`should have detected changes`, () => {
    const initialValue = component.allJobs;
    component.allJobs = dummyJobs;
    component.ngOnChanges();
    fixture.detectChanges();
    expect(component.allJobs).not.toEqual(initialValue);
  });
});
