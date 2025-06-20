import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-calendario',
  imports: [MatButtonModule,
    MatButtonToggleModule, 
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
     MatDividerModule,
    MatCheckboxModule,
    MatInputModule],
  templateUrl: './calendario.html',
  styleUrl: './calendario.scss'
})
export class Calendario {

}
