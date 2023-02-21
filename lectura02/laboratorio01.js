class persona{
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

const marcos = new Persona('Marcos Rodríguez',50,'Masculino',170);
const martha = new Persona('Martha Bañuelos',20,'Femenina',162);
marcos.saludar();
martha.saludar();

marcos.comer();
marcos.dormir();
martha.comer();

marcos.nombrePersona = 'Marcos Fernández';

marcos.saludar();

console.log(marcos.nombrePersona)