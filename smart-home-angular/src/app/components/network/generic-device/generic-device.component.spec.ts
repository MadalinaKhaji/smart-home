import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDeviceComponent } from './generic-device.component';

describe('GenericDeviceComponent', () => {
  let component: GenericDeviceComponent;
  let fixture: ComponentFixture<GenericDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
