import { Component } from '@angular/core';


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
  ],
  templateUrl: './calendario.html',
  styleUrls: ['./calendario.scss'],
})
export class Calendario {
  view: string = 'week';
  snapDraggedEvents = true;

  dayStartHour = 6;
  viewDate: Date = new Date();

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

  refresh: Subject<any> = new Subject();

  eventTimesChanged({ event, newStart, newEnd }: any): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next(null);
  }
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
}
