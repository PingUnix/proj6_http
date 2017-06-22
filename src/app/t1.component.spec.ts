/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { T1Component } from './t1.component';

describe('T1Component', () => {
  let component: T1Component;
  let fixture: ComponentFixture<T1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
