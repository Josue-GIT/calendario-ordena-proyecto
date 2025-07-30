import { CommonModule, DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CalendarModule } from 'angular-calendar';
import { ModalIngreso } from '../modal-ingreso/modal-ingreso';
import { ModalEgreso } from '../modal-egreso/modal-egreso';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-principal',
  imports: [DatePipe,MatButtonModule,
    MatButtonToggleModule, 
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
     MatDividerModule,
    MatCheckboxModule,
    MatInputModule,
  CalendarModule,
CalendarModule,
    CommonModule,
    DatePipe,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './modal-principal.html',
  styleUrl: './modal-principal.scss'
})
export class ModalPrincipal {
  selectedDate: Date | null = null;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { fecha: Date },
private dialog: MatDialog) {}

  onDayEntry(date: Date): void {
  this.selectedDate = date;
  const dialogRef = this.dialog.open(ModalIngreso, {
    width: '900px',
    data: { fecha: date }
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('El modal principal se cerró');
  });
  }
  
  onDayExit(date: Date): void {
    this.selectedDate = date;
    const dialogRef = this.dialog.open(ModalEgreso, {
    width: '900px',
    data: { fecha: date }
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('El modal principal se cerró');
  });
  }
}
