import { CommonModule, DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CalendarModule } from 'angular-calendar';

@Component({
  selector: 'app-modal-egreso',
  standalone: true,
  imports: [MatButtonModule,
    CommonModule,
    MatButtonToggleModule, 
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
     MatDividerModule,
    MatCheckboxModule,
    MatInputModule,
    CalendarModule,
    FormsModule,
  ReactiveFormsModule,
  MatSelectModule,],
  templateUrl: './modal-egreso.html',
  styleUrl: './modal-egreso.scss'
})
export class ModalEgreso {
  form: any;
  subcategorias: string[] = [];

  categoriasMap: any = {
    operativos: [
      'Costo de Ventas',
      'Sueldos y Salarios',
      'Alquileres',
      'Servicios Básicos',
      'Publicidad y Marketing',
      'Transporte y Logística'
    ],
    financieros: [
      'Intereses de Préstamos',
      'Comisiones Bancarias'
    ],
    administrativos: [
      'Papelería y Suministros',
      'Mantenimiento de Equipos',
      'Servicios Profesionales'
    ],
    extraordinarios: [
      'Multas o Penalidades',
      'Pérdidas por siniestros o robos'
    ]
  };

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder) {
    this.form = this.fb.group({
      categoria: [null],
      subcategoria: [null],
      descripcion: ['']
    });
  }

  onCategoriaChange(categoria: string) {
    this.subcategorias = this.categoriasMap[categoria] || [];
    this.form.get('subcategoria')?.setValue(null);
  }
}