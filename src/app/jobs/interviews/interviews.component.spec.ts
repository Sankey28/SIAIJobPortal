import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { InterviewsComponent } from "./interviews.component";
import { DataService } from "src/app/core/services/data.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("InterviewsComponent", () => {
  let component: InterviewsComponent;
  let fixture: ComponentFixture<InterviewsComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule],
      providers: [DataService],
      declarations: [InterviewsComponent]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewsComponent);
    component = fixture.componentInstance;
  });

  it(`should create component`, () => {
    expect(component).toBeTruthy();
  });
});
