import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 @ViewChild('f', {static: false}) signUp: NgForm;

 defaultQuestion = 'pet';
 answer: '';
 user = {
   username: '',
   email: '',
   secretQuestion: ''
 };
 submitted: boolean;

 genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signUp.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }
  onSubmit(form: NgForm) {
    this.submitted = true;
    this.user.username = this.signUp.value.userData.username;
    this.user.email = this.signUp.value.userData.email;
    this.user.secretQuestion = this.signUp.value.secret;

    this.signUp.reset();

  }
}
