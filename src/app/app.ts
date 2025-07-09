import { Component } from '@angular/core';
import { Navbar } from '../component/navbar/navbar';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'angular-calendar';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterModule, CalendarModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'calendario-ordena';
}
