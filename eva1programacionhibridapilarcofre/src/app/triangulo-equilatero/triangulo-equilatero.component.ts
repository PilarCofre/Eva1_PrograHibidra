import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput,  IonButton } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { TrianguloEquilatero } from '../modelo/figura';
@Component({
  selector: 'app-triangulo-equilatero',
  templateUrl: './triangulo-equilatero.component.html',
  styleUrls: ['./triangulo-equilatero.component.scss'],
  standalone: true,
  imports: [FormsModule, IonButton, IonList, IonItem, IonInput]
})
export class TrianguloEquilateroComponent  implements OnInit {
  ladoAStr: string = "";
  tipoFigura: string = "";
  resultado3: string = "";
  constructor() { }

  ngOnInit() {}

  calcularPerimetro() {
    const ladoA = parseInt(this.ladoAStr)     
       //const tipoFigura = parseInt(this.tipoFiguraStr)
    const figura = new TrianguloEquilatero(this.tipoFigura, ladoA)
    const perimetro3 = figura.calcularPerimetro().toFixed(2)
    this.resultado3 = `El Perimetro del tríangulo Equilatero es ${perimetro3}`
  }


}


