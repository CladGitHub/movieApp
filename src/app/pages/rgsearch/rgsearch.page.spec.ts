import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgsearchPage } from './rgsearch.page';

describe('RgsearchPage', () => {
  let component: RgsearchPage;
  let fixture: ComponentFixture<RgsearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgsearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgsearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
