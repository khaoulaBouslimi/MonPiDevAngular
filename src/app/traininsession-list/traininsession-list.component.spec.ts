import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraininsessionListComponent } from './traininsession-list.component';

describe('TraininsessionListComponent', () => {
  let component: TraininsessionListComponent;
  let fixture: ComponentFixture<TraininsessionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraininsessionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraininsessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
