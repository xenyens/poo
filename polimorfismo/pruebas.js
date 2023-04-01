import Cuadrado from "./src/Cuadrado.js";
import Rectangulo from "./src/Rectangulo.js";
import Triangulo from "./src/Triangulo.js";
import Figura from "./src/Figura.js";

const figura = new Figura();
const cuadrado = new Cuadrado('Cuadrado');
const triangulo = new Triangulo();
const rectangulo = new Rectangulo()


figura.areaFigura();
cuadrado.areaFigura(5,'pies');
triangulo.areaFigura(10,5);
rectangulo.areaFigura(10,20);