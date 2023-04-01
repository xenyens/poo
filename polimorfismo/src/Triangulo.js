import Figura from "./Figura.js";

export default class Triangulo extends Figura{
    areaFigura(base,altura){
        let area = (base * altura) / 2;
        console.log(`El área del triángulo es: ${area}`)
    }
}