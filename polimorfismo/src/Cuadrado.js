import Figura from "./Figura.js";

export default class Cuadrado extends Figura{
    areaFigura(lado,unidad){
        let area = lado * lado;
        console.log(`El área del cuadrado es: ${area} ${unidad}`)
    }
}