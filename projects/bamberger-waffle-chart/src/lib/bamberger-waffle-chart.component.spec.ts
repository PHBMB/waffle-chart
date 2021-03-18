import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbSimpleWaffleChartComponent } from './bamberger-waffle-chart.component';

describe('BambergerWaffleChartComponent', () => {
  let component: PbSimpleWaffleChartComponent;
  let fixture: ComponentFixture<PbSimpleWaffleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbSimpleWaffleChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PbSimpleWaffleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
