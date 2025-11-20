import { Component } from '@angular/core';
import { TransactionsComponent } from './transactions/transactions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TransactionsComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}