import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from './user.service';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'register';
  username: string = '';
  password: string = '';
    done: boolean = false;
  errorMessage: any;
  router: any;
  constructor(private svc: UserService){}
  addUser(): void {
    this.done = true;
    this.svc.create(this.username, this.password).subscribe({
        next: data => {
            alert("Good Request");
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    })
}
}
