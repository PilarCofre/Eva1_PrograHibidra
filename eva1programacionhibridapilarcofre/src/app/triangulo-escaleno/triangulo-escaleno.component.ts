import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput,  IonButton, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { TrianguloEscaleno } from '../modelo/figura';


@Component({
  selector: 'app-triangulo-escaleno',
  templateUrl: './triangulo-escaleno.component.html',
  styleUrls: ['./triangulo-escaleno.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard, FormsModule, IonButton, IonList, IonItem, IonInput]
})
export class TrianguloEscalenoComponent  implements OnInit {
  ladoAStr: string = "";
  ladoBStr: string = "";
  ladoCStr: string = "";
  tipoFigura: string = "";
  resultado2: string = "";
  
  constructor() { }

  ngOnInit() {}

  calcularPerimetro() {
    const ladoA = parseInt(this.ladoAStr)
    const ladoB = parseInt(this.ladoBStr)
    const ladoC = parseInt(this.ladoCStr)
   //const tipoFigura = parseInt(this.tipoFiguraStr)
    const figura = new TrianguloEscaleno(this.tipoFigura, ladoA, ladoB, ladoC)
    const perimetro2 = figura.calcularPerimetro().toFixed(2)
    this.resultado2 = `El Perimetro del tríangulo es ${perimetro2}`
  }


}
