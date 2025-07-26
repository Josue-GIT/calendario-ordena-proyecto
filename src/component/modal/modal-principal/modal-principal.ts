import { DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
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
  CalendarModule],
  templateUrl: './modal-principal.html',
  styleUrl: './modal-principal.scss'
})
export class ModalPrincipal {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { fecha: Date }) {}
}
