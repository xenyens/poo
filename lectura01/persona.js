class Persona{
    constructor(nombre,edad,genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    presentarse(){
        console.log(`Hola mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.genero}`) 
    }
    nacimiento(){
        console.log(`${this.nombre} naciste el año de ${2023-this.edad}`)
    }
}

const pedro = new Persona('Pedro',40,'Masculino')
const juan = new Persona('Juan',20,'Masculino')
const perla = new Persona('Perla',18,'Femenina')

pedro.presentarse()
juan.presentarse()
perla.presentarse()

pedro.nacimiento()
perla.nacimiento()
juan.nacimiento()