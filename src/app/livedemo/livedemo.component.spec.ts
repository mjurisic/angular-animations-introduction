import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivedemoComponent } from './livedemo.component';

describe('LivedemoComponent', () => {
  let component: LivedemoComponent;
  let fixture: ComponentFixture<LivedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
