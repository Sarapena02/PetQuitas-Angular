import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoTableComponent } from './form-tratamiento.component';

describe('FormTratamientoComponent', () => {
    let component: TratamientoTableComponent;
    let fixture: ComponentFixture<TratamientoTableComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [TratamientoTableComponent]
        });
        fixture = TestBed.createComponent(TratamientoTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    })
})