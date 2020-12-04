import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClientService } from '../../services/http-client.service';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public httpService: HttpClientService,
  ) { }

  ngOnInit(): void {
  }

  /**
   * Define login form
  */
  loginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  /**
   * Variable to sign out
   * @type {Subscription}
  */
  private subscription: Subscription;

  /**
   * Getter for easy access to login form fields
   * @return {FormControl} Acces to login form
  */
  get form() {
    return this.loginForm.controls;
  }

  /**
   * Submit login
   * @return {void} Nothing
  */
  onSubmit() {

    let user: User = {
      email: this.form.username.value,
      password: this.form.password.value
    }

    console.log(user);

    this.httpService.login(user);

    // this.subscription = this.httpService.login(user).subscribe((response) => {
    //   console.log(response.data);
    //   // if (response.status == 200) {}
    // }, (error) => {
    //   console.log(error);
    // });
  }

}
