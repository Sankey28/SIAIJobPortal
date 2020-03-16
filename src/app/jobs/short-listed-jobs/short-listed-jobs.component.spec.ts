import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ShortlistedJobsComponent } from "./short-listed-jobs.component";
import { DataService } from "src/app/core/services/data.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ShortlistedJobsComponent", () => {
  let component: ShortlistedJobsComponent;
  let fixture: ComponentFixture<ShortlistedJobsComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
      declarations: [ShortlistedJobsComponent]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ShortlistedJobsComponent);
    component = fixture.componentInstance;
  });

  it(`should create component`, () => {
    expect(component).toBeTruthy();
  });
});
