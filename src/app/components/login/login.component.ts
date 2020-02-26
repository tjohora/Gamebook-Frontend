import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  loginDetails;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService) {
    
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  onSubmit(details) {
    this.userService.login(details).subscribe(data => {
      console.log(data)
      this.loginDetails = data;
    });

  }
}
