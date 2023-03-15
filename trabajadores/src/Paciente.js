import Persona from "./Persona.js";

export default class Paciente extends Persona{
    constructor(nombre, edad, peso, estatura, factorActividad, genero){
        super(nombre,edad);
        this.peso = peso;

        // La estatura enviarla en centímetros
        this.estatura = estatura;
        
        //Fememina o Masculino
        this.genero = genero;
        
        //Factor de actividad se manejará con números
        // 1.2   - sendentario 
        // 1.3   - ligero
        // 1.5   - activa
        // 1.7   - muy activa
        this.factorActividad = factorActividad;
    }

    imc(){
        let imc = this.peso / (this.estatura/100 * this.estatura/100);
        if( imc < 18.5 ){
            return 'Bajo Peso'
        } else if(imc >= 18.5 || imc <24.9){
            return 'Normal'
        } 
    }

    gastoEnergeticoTotal(){

        if( this.genero === 'Femenina' ){
            if(this.edad >= 18 || this.edad < 29){                
                return ((11.02 * this.peso) + 679) * this.factorActividad;
            }
        }

    }

}