import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEgreso } from './modal-egreso';

describe('ModalEgreso', () => {
  let component: ModalEgreso;
  let fixture: ComponentFixture<ModalEgreso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEgreso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEgreso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
