import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {OperationsComponent} from './pages/operations/operations.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OperationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tester-learn-angular';
}
