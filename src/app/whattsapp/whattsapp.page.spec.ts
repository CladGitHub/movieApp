import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhattsappPage } from './whattsapp.page';

describe('WhattsappPage', () => {
  let component: WhattsappPage;
  let fixture: ComponentFixture<WhattsappPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhattsappPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhattsappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
