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
  selector: 'app-modal-ingreso',
  imports: [DatePipe,MatButtonModule,
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
  templateUrl: './modal-ingreso.html',
  styleUrl: './modal-ingreso.scss'
})
export class ModalIngreso {
  form: any;
  subcategorias: string[] = [];

  categoriasMap: any = {
    operacionales: [
      'Ventas de Productos',
      'Prestación de Servicios',
      'Ingresos por Alquiler'
    ],
    no_operacionales: [
      'Intereses Ganados',
      'Ganancias por Venta de Activos',
      'Dividendos Recibidos'
    ],
    otros: [
      'Subsidios o Bonificaciones',
      'Ingresos Extraordinarios'
    ]
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
  this.form = this.fb.group({
    categoria: [null],    
    subcategoria: [null],
    descripcion: ['']
  });
}

  onCategoriaChange(categoria: string) {
    this.subcategorias = this.categoriasMap[categoria] || [];
    this.form.get('subcategoria')?.setValue('');
  }
}