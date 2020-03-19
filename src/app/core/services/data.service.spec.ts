import { TestBed } from "@angular/core/testing";
import { DataService } from "./data.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { defer } from "rxjs";

describe("DataService", () => {
  let httpClientSpy: { get: jasmine.Spy };
  let dataService: DataService;
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
  const expectedDummyJobs: any[] = [
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
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
  });

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    dataService = new DataService(httpClientSpy as any);
  });

  it("should be created", () => {
    const service: DataService = TestBed.inject(DataService);
    expect(service).toBeTruthy();
  });

  it("should return all job list", () => {
    httpClientSpy.get.and.returnValue(asyncData(dummyJobs));
    dataService.getPostedJobs(response => {
      expect(response).toEqual(expectedDummyJobs);
    });
  });

  it("should return expected jobs list", () => {
    httpClientSpy.get.and.returnValue(asyncData(dummyJobs[0]));
    dataService.getJobsById([1], response => {
      expect(response).toEqual(expectedDummyJobs[0]);
    });
  });

  it("should return expected candidates list", () => {
    httpClientSpy.get.and.returnValue(asyncData(dummyJobs[0]));
    dataService.getShortListedCandidates(1, response => {
      expect(response).toEqual(expectedDummyJobs[0].ShortListed);
    });
  });

  it("should return expected interview details", () => {
    httpClientSpy.get.and.returnValue(
      asyncData(dummyJobs[0].ShortListed[0].Interview)
    );
    dataService.getInterviewsDetails({ CandidateId: 1, JobId: 1 }, response => {
      expect(response).toEqual(expectedDummyJobs[0].ShortListed[0].Interview);
    });
  });
});
function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
