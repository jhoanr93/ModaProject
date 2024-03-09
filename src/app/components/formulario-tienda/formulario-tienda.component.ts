import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-tienda',
  standalone: true,
  imports: [],
  templateUrl: './formulario-tienda.component.html',
  styleUrl: './formulario-tienda.component.css'
})
export class FormularioTiendaComponent implements OnInit {
    tiendaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.tiendaForm = this.fb.group({
      pais: [''],
      provincia: [''],
      ciudad: [''],
      nombreRecoge: [''],
      identificacion: [''],
      telefonoRecoge: [''],
      diaRecogida: [''],
      centroComercial: [''],
      envolverRegalo: [false],
      tiempoRetencion: ['']
    });
  }
   

  ngOnInit(): void {
    
}


/*
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-tienda',
  templateUrl: './formulario-tienda.component.html',
  styleUrls: ['./formulario-tienda.component.css']
})
export class FormularioTiendaComponent implements OnInit {
  tiendaForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.tiendaForm = this.fb.group({
      pais: [''],
      provincia: [''],
      ciudad: [''],
      nombreRecoge: [''],
      identificacion: [''],
      telefonoRecoge: [''],
      diaRecogida: [''],
      centroComercial: [''],
      envolverRegalo: [false],
      tiempoRetencion: ['']
    });
  }eenRenderingContextId {
  tiendaForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.tiendaForm = this.fb.group({
      pais: [''],
      provincia: [''],
      ciudad: [''],
      nombreRecoge: [''],
      identificacion: [''],
      telefonoRecoge: [''],
      diaRecogida: [''],
      centroComercial: [''],
      envolverRegalo: [false],
      tiempoRetencion: ['']
    });
  }
}
