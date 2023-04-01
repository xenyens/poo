import Figura from "./Figura.js";

export default class Rectangulo extends Figura{
    areaFigura(base,altura){
        let area = base * altura;
        console.log(`El área del rectángulo es: ${area}`)
    }
}