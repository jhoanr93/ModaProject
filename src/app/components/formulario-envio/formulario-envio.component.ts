import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-envio',
  standalone: true,
  imports: [],
  templateUrl: './formulario-envio.component.html',
  styleUrl: './formulario-envio.component.css'
})
export class FormularioEnvioComponent {
  envioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.envioForm = this.fb.group({
      pais: ['', Validators.required],
      provincia: ['', Validators.required],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],
      conjuntoCasa: [''],
      nombreEdificio: [''],
      apartamento: [''],
      codigoPostal: ['', Validators.required],
      horasDisponibilidad: [''],
      recepcion: ['persona', Validators.required]
    });
  }
  

  ngOnInit(): void {
  }
}
