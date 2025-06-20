import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calendario } from './calendario';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';

describe('Calendario', () => {
  let component: Calendario;
  let fixture: ComponentFixture<Calendario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calendario,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatSelectModule,
        MatSliderModule,
        MatCheckboxModule,
        MatInputModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calendario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
