import { Component } from '@angular/core';
import { DjangoService } from '../../services/django.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private djangoService: DjangoService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.djangoService.login(this.loginForm.value).subscribe(
        (response: any) => {
          console.log('Login exitoso:', response);
          localStorage.setItem('access_token', response.access);
          localStorage.setItem('refresh_token', response.refresh);
          this.router.navigate(['/inicio']);
        },
        (error: any) => {
          console.error('Error en el login:', error);
        }
      );
    }
  }
}

