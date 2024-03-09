import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrendaFormularioComponent } from './prenda-formulario.component';

describe('PrendaFormularioComponent', () => {
  let component: PrendaFormularioComponent;
  let fixture: ComponentFixture<PrendaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrendaFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrendaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
