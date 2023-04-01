import Figura from "./Figura.js";

export default class Cuadrado extends Figura{
    constructor(nombre){
        super(nombre);
    }

    areaFigura(lado,unidad){
        let area = lado * lado;
        console.log(`El área del ${this.nombre} es: ${area} ${unidad}`)
    }
}