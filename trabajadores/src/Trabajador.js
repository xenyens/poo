import Persona from './Persona.js'

export default class Trabajador extends Persona{
    constructor(nombre,edad,seguro,salario,puesto){
        super(nombre,edad);
        this.seguro = seguro;
        this.salario = salario;
        this.puesto = puesto;
    }

    calcularSalario(){
        let iva = this.salario * 0.16;
        this.salario = this.salario - iva;
        return this.salario;
    }

}