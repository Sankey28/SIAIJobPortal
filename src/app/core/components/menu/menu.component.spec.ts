import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MenuComponent } from "./menu.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("MenuComponent", () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [MenuComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it(`should have appTitle as SIAI Job Portal`, () => {
    expect(component.appTitle).toEqual("SIAI Job Portal");
  });
});
