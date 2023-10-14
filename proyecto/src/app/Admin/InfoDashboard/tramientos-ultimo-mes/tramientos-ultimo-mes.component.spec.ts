import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramientosUltimoMesComponent } from './tramientos-ultimo-mes.component';

describe('TramientosUltimoMesComponent', () => {
  let component: TramientosUltimoMesComponent;
  let fixture: ComponentFixture<TramientosUltimoMesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TramientosUltimoMesComponent]
    });
    fixture = TestBed.createComponent(TramientosUltimoMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
