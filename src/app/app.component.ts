import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //melumatlar <approot></approot>-a daxil edilicek
  templateUrl: './app.component.html', //melumatlar buradan temin edilecek
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieApp';
}
