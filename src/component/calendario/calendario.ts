import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';  // Importar CommonModule y DatePipe


// angular-calendar
import 'zone.js';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarWeekViewBeforeRenderEvent,
  CalendarDayViewBeforeRenderEvent,
  CalendarModule,
  DateAdapter,
  CalendarView,
  
} from 'angular-calendar';
import { Subject } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalPrincipal } from '../modal/modal-principal/modal-principal';

export const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};




@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [
    CalendarModule,
    CommonModule,
    DatePipe,
    MatButtonModule, 
    MatDialogModule
     // Asegurarse de importar DatePipe
  ],
  templateUrl: './calendario.html',
  styleUrls: ['./calendario.scss'],
})

export class Calendario {
  selectedDate: Date | null = null;
  constructor(
    private sanitizer: DomSanitizer,
    private dialog: MatDialog) { 
      
    }
  modalAbierto: boolean = false;
  snapDraggedEvents = true;
  dayStartHour = 6;
  view: CalendarView = CalendarView.Month;  // Vista inicial en mes
  viewDate: Date = new Date();  // Fecha actual

  onDayClick(date: Date): void {
  this.selectedDate = date;
  const dialogRef = this.dialog.open(ModalPrincipal, {
    width: '900px',
    data: { fecha: date }
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('El modal principal se cerró');
  });
}

  setView(view: CalendarView) {
    this.view = view;
  }

  previousMonth(): void {
    this.viewDate = new Date(this.viewDate.setMonth(this.viewDate.getMonth() - 1));
  }

  nextMonth(): void {
    this.viewDate = new Date(this.viewDate.setMonth(this.viewDate.getMonth() + 1));
  }

  today(): void {
    this.viewDate = new Date();
  }

  refresh: Subject<any> = new Subject();

  public segmentIsValid(date: Date) {
    // valid if time is greater than 0800 andd less than 1700
    return date.getHours() >= 8 && date.getHours() <= 17;
  }
  beforeDayViewRender(day: CalendarDayViewBeforeRenderEvent): void {

  }
  
}
