import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericValueComponent } from './generic-value.component';

describe("Time Ago Function", () => {
  let component: GenericValueComponent;

  let fixture: ComponentFixture<GenericValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GenericValueComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return now', () => {
    expect(component.timeago("")).toBe("now");
  });
});
