export default class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    //Get
    get nombrePersona(){
        return this.nombre;
    }
    get edadPersona(){
        return this.edad;
    }

    //Set
    set nombrePersona(nuevoNombre){
        this.nombre = nuevoNombre;
    }
    set edadPersona(nuevaEdad){
        this.edad = nuevaEdad;
    }
}