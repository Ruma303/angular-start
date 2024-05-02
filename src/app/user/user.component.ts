  import { Component, Input } from '@angular/core';

  @Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
  })
  export class UserComponent {
    @Input() user?: { name: string; age: number; job: string };
    // Rendiamo l'input opzionale

    constructor() {
      // Non è necessario inizializzare 'user' qui
    }
  }


