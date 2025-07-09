import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CalendarModule } from 'angular-calendar';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule,
    MatButtonToggleModule, 
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
     MatDividerModule,
    MatCheckboxModule,
    MatInputModule,
  CalendarModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
