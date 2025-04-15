export abstract class FiguraGeometrica {
    tipoFigura: string = ""
     

    constructor(tipoFigura: string){ 
        this.tipoFigura = tipoFigura
    }
    abstract calcularPerimetro(): number
   
}

export class Circulo extends FiguraGeometrica {
    private radiocirculo: number

    constructor(tipoFigura: string, radiocirculo: number) {
        super(tipoFigura)
        this.radiocirculo = radiocirculo
    }

    override calcularPerimetro(): number{
        return Math.PI * this.radiocirculo * 2
    }

}
export class TrianguloEscaleno extends FiguraGeometrica {
     ladoA: number
     ladoB: number
     ladoC: number

    constructor(tipoFigura: string, ladoA: number, ladoB: number, ladoC: number){
        super(tipoFigura)
        this.ladoA = ladoA
        this.ladoB = ladoB
        this.ladoC = ladoC
    } 
    override calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC

    }
}
export class TrianguloEquilatero extends FiguraGeometrica {
    ladoA: number
    

   constructor(tipoFigura: string, ladoA: number){
       super(tipoFigura)
       this.ladoA = ladoA
       
   } 
   override calcularPerimetro(): number {
       return this.ladoA * 3

   }
}
       
    


