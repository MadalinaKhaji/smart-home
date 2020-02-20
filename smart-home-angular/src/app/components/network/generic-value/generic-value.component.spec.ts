import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericValueComponent } from './generic-value.component';

describe('GenericValueComponent', () => {
  let component: GenericValueComponent;
  let fixture: ComponentFixture<GenericValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
