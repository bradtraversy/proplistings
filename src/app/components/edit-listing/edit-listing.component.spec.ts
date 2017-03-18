/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditListingComponent } from './edit-listing.component';

describe('EditListingComponent', () => {
  let component: EditListingComponent;
  let fixture: ComponentFixture<EditListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
