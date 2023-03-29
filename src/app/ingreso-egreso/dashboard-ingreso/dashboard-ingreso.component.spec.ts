import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIngresoComponent } from './dashboard-ingreso.component';

describe('DashboardIngresoComponent', () => {
  let component: DashboardIngresoComponent;
  let fixture: ComponentFixture<DashboardIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardIngresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
