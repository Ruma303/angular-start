import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomeComponent, AboutComponent],
  // templateUrl: './app.component.html',
  template: `
    <h1> Angular </h1>
    <app-welcome />
    <app-about />
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-start';
}
