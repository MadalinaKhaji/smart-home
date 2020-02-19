import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightsDeviceComponent } from './lights-device.component';

describe('LightsDeviceComponent', () => {
  let component: LightsDeviceComponent;
  let fixture: ComponentFixture<LightsDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightsDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightsDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
