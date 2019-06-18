import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { ConnectionControllerService } from 'src/app/shared/api/api.';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  errorMessage: string;
  isAuthenticated: boolean;
  userConnected: User;
  error: string;

  constructor(private formBuilder: FormBuilder, private connexionService: ConnectionControllerService,
              private router: Router, private reroute: ActivatedRoute ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signInForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const login = this.signInForm.get('login').value;
    const password = this.signInForm.get('password').value;
    this.connexionService.connectUsingPOST(login, password).subscribe(
      (resp) => {  this.userConnected = resp;
                   sessionStorage.setItem('userConnected', this.userConnected.id.toString());
                   sessionStorage.setItem('type', this.userConnected.type);
       },
      (error) => {this.errorMessage = error.error.message; },
      () =>  {
        console.log(this.userConnected);
      //   if ( sessionStorage.getItem('type') === 'CLIENT' ) {
        window.location.href ='http://localhost:4200/home';
      // } else {
      //   window.location.href = 'http://localhost:8081/invite/connexion/connexion.xhtml';
      // }
      }
    );

}
}
