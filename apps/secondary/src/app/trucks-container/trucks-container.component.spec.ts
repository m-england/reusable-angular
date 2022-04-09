import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrucksContainerComponent } from './trucks-container.component';

describe('TrucksComponent', () => {
  let component: TrucksContainerComponent;
  let fixture: ComponentFixture<TrucksContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrucksContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrucksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
