import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  //styleUrl: './welcome.component.css',
  //styleUrls: ['./welcome.component.css', './style2.component.css']
  styleUrls: ['./style2.component.css', './welcome.component.css'],
  /* styles: `p {
    background-color: lightgreen;
    color: blue;
  }`, */
})
  export class WelcomeComponent {
    title: string = 'WelcomeComponent';
    classH1: string = 'welcome';

    constructor() {
      console.log(`Costruttore di ${this.title} attivato`);
    }
  }
