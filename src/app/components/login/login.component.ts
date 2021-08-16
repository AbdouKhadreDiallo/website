import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
	token: any;
  constructor(private loginService: LoginService, builder: FormBuilder) {
    this.loginForm = builder.group(
			{
				username: ['', [Validators.required]],
				password: ['', [Validators.required]]
			}
		);
   }

  ngOnInit(): void {
  }
  onSubmit() {
		//return;
    console.log(this.loginForm.value.username);

		this.loginService.getToken(this.loginForm.value.username, this.loginForm.value.password);
		//console.log(this.loginService.getToken(this.loginForm.value.login, this.loginForm.value.password));
    this.token = this.loginService.decodeToken();
    console.log("token decoded",this.token);

	}

}
