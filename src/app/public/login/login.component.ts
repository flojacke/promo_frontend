import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { ConnectionControllerService } from 'src/app/shared/api/api';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  errorMessage: string;
  isAuthenticated: boolean;
  userConnecte: User;
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
      (resp) => {  this.userConnecte = resp;
                   sessionStorage.setItem('userConnecte', this.userConnecte.id.toString());
                   sessionStorage.setItem('type', this.userConnecte.type);
       },
      (error) => {this.errorMessage = error.error.message; },
      () =>  { if ( sessionStorage.getItem('type') === 'CLIENT' ) {
        window.location.href ='http://localhost:4200/home'
      } else {
        window.location.href = 'http://localhost:8081/invite/connexion/connexion.xhtml';
      }
      }
    );

}
}
