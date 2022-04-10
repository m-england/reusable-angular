import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCardTwoComponent } from './common-card-two.component';

describe('CommonCardTwoComponent', () => {
  let component: CommonCardTwoComponent;
  let fixture: ComponentFixture<CommonCardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonCardTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
