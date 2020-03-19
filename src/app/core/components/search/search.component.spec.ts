import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { DataService } from "../../services/data.service";
import { SearchComponent } from "./search.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("SearchComponent", () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
});
