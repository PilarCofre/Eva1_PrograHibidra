import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput,  IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { Circulo } from '../modelo/figura';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, FormsModule, IonButton, IonList, IonItem, IonInput]
})
export class CirculoComponent  implements OnInit {
  radiocirculoStr: string = "";
  resultado: string = "";
  tipoFigura: string = "";

  constructor() { }

  ngOnInit() {}

  calcularPerimetro() {
    const radiocirculo = parseInt(this.radiocirculoStr)
    const figura = new Circulo(this.tipoFigura, radiocirculo)
    const perimetro = figura.calcularPerimetro().toFixed(2)
    this.resultado = `El Perimetro del círculo es ${perimetro}`
  }

}
