import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIngreso } from './modal-ingreso';

describe('ModalIngreso', () => {
  let component: ModalIngreso;
  let fixture: ComponentFixture<ModalIngreso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalIngreso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalIngreso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
