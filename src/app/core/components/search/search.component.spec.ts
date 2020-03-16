import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { DataService } from "../../services/data.service";
import { SearchComponent } from "./search.component";

describe("SearchComponent", () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
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

  it(`should be called getAllJobs()`, () => {
    const spy = spyOn(component, "getAllJobs").and.callThrough();
    expect(component).toBeDefined();
    expect(spy);
    fixture.detectChanges();
    expect(component.getAllJobs).toHaveBeenCalled();
  });

  it(`should be called searchJobs()`, () => {
    const spy = spyOn(component, "searchJobs").and.callThrough();
    expect(component).toBeDefined();
    expect(spy);
    component.searchJobs();
    fixture.detectChanges();
    expect(component.searchJobs).toHaveBeenCalled();
  });
});
