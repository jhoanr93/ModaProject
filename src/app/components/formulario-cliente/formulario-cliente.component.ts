import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-cliente',
  standalone: true,
  imports: [],
  templateUrl: './formulario-cliente.component.html',
  styleUrl: './formulario-cliente.component.css'
})
export class FormularioClienteComponent implements OnInit{
  clienteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      numDocumento: ['', Validators.required],
      tipoDocumento: ['', Validators.required],      
      email: ['', [Validators.required, Validators.email]],
      confirmaEmail: ['', [Validators.required, Validators.email]],
      pais: ['', Validators.required],
      ciudad: ['', Validators.required],
      telefono: ['', Validators.pattern("[0-9]{10}")],
      indicativo: ['', Validators.required],
      confirmaTelefono: ['', Validators.pattern("[0-9]{10}")],

    });
   }

  ngOnInit(): void {    
  }

  submitForm(): void {
    if (this.clienteForm.valid) {
      console.log(this.clienteForm.value);
      // Aquí puedes enviar los datos del formulario a tu backend o realizar otras acciones
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }

}
