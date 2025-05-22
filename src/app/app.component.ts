import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TdfComponent } from './tdf/tdf.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,TdfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TempDForm';
}
