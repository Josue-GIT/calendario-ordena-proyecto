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
    MatButtonModule,  // Asegurarse de importar DatePipe
  ],
  templateUrl: './calendario.html',
  styleUrls: ['./calendario.scss'],
})
export class Calendario {
  snapDraggedEvents = true;

  dayStartHour = 6;
  view: CalendarView = CalendarView.Month;  // Vista inicial en mes
  viewDate: Date = new Date();  // Fecha actual

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
/*
  events: CalendarEvent[] = [
    {
      title: 'Draggable event',
      color: colors.yellow,
      start: new Date(),
      draggable: true,
    },
    {
      title: 'A non draggable event',
      color: colors.blue,
      start: new Date(),
    },
  ];
*/
  refresh: Subject<any> = new Subject();
/*
  eventTimesChanged({ event, newStart, newEnd }: any): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next(null);
  }
    */
  public segmentIsValid(date: Date) {
    // valid if time is greater than 0800 andd less than 1700
    return date.getHours() >= 8 && date.getHours() <= 17;
  }
  beforeDayViewRender(day: CalendarDayViewBeforeRenderEvent): void {
    // day.body.hourGrid.forEach((hour) => {
    //   hour.segments.forEach((segment) => {
    //     if (!this.segmentIsValid(segment.date)) {
    //       delete segment.cssClass;
    //       segment.cssClass = 'cal-disabled';
    //     }
    //   });
    // });
  }
  onDayClick(date: Date): void {
  alert('Has hecho clic en: ' + date.toLocaleDateString());
}
}
