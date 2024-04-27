import { Component } from '@angular/core';
import { DjangoService } from '../../services/django.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registroForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private djangoService: DjangoService, private router: Router) {
    this.registroForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      type: ['CLIENTE'] 
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      console.log(this.registroForm.value)
      this.djangoService.registrarUsuario(this.registroForm.value).subscribe(
        (response: any) => {
          console.log('Registro exitoso:', response);
          this.router.navigate(['/login']);
        },
        (error: any) => {
          console.error('Error en el registro:', error);
        }
      );
    }
  }
}