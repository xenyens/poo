export default class Persona{
    constructor(nombre,edad,genero,estatura){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.estatura = estatura;
    }

    //Métodos get
    get nombrePersona(){
        return this.nombre;
    }

    //Métodos set
    set nombrePersona(nombre){
        this.nombre = nombre;
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre}.`);        
    }

    comer(){
        console.log(`${this.nombre}, está comiendo, no te puede atender.`);
    }
    dormir(){
        console.log(`${this.nombre}, se encuentra durmiendo, no molestar.`)
    }
}