import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, SelectChangeEventDetail, IonText } from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloEscalenoComponent } from "../triangulo-escaleno/triangulo-escaleno.component";
import { TrianguloEquilateroComponent } from '../triangulo-equilatero/triangulo-equilatero.component';
import { IonSelectCustomEvent } from '@ionic/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonText, IonHeader, IonToolbar, IonTitle, IonContent, CirculoComponent,
    TrianguloEscalenoComponent, IonSelect, IonSelectOption, CommonModule, TrianguloEquilateroComponent],
})
export class HomePage {

  tipoFigura:string =""
  tipoTriangulo:string = ""
  


  constructor() {}

  esCirculo() { return this.tipoFigura == "Circulo"}
  esTriangulo() { return this.tipoFigura == "Triangulo"}

  SeleccionTipoFigura($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
      this.tipoFigura = $event.detail.value
  }
  SeleccionTipoTriangulo($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.tipoTriangulo = $event.detail.value
  }
}
