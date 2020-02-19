import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AalborgDeviceComponent } from './aalborg-device.component';

describe('AalborgDeviceComponent', () => {
  let component: AalborgDeviceComponent;
  let fixture: ComponentFixture<AalborgDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AalborgDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AalborgDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
