import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'angular-calendar';
@Component({
  selector: 'app-navbar',
  imports: [MatToolbar,
    RouterModule,
  CalendarModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  constructor(private router: Router) { }
}
