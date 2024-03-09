import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prenda-formulario',
  standalone: true,
  imports: [],
  templateUrl: './prenda-formulario.component.html',
  styleUrl: './prenda-formulario.component.css'
})
export class PrendaFormularioComponent implements OnInit{
  prendaForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.prendaForm = this.fb.group({
      prendas: this.fb.array([
        this.createPrenda()
      ])
    });
  }

  ngOnInit(): void {
    
  }

  createPrenda(): FormGroup {
    return this.fb.group({
      nombre: ['', Validators.required],
      talla: ['', Validators.required],
      color: ['', Validators.required],
      cantidad: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.prendaForm.valid) {
      console.log(this.prendaForm.value);
      // Aquí puedes enviar los datos del formulario a tu backend o realizar otras acciones
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }

  addPrenda(): void {
    const prendasArray = this.prendaForm.get('prendas') as FormArray;
    prendasArray.push(this.createPrenda());
  }
}
