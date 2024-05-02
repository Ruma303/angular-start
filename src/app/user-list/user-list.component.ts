  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { UserComponent } from '../user/user.component';

  @Component({
    selector: 'app-user-list',
    standalone: true,
    imports: [CommonModule, UserComponent],
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.css'
  })
  export class UserListComponent {
    users: Array<{ name: string; age: number; job: string }> = [
        { name: 'Alice', age: 25, job: 'Web Developer' },
        { name: 'Bob', age: 32, job: 'Project Manager' },
        { name: 'Charlie', age: 28, job: 'Engineer' }
      ];
  }



