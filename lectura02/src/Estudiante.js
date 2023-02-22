import Persona from "./Persona.js";

export default class Estudiante extends Persona{
    constructor(nombre,edad,genero,estatura,carrera){
        super(nombre,edad,genero,estatura);
        this.carrera = carrera;
        this.promedio = 0;
        this.semestre = 1;
    }
    //Métodos get
    get carreraEstudiante(){
        return this.carrera;
    }
    get promedioEstudiante(){
        return this.promedio;
    }
    get semestreEstudiante(){
        return this.semestre;
    }

    //Métodos set
    set carreraEstudiante(nuevaCarrera){
        this.carrera = nuevaCarrera;
    }
    set promedioEstudiante(nuevoPromedio){
        this.promedio = nuevoPromedio;
    }
    set semestreEstudiante(nuevoSemestre){
        this.semestre = nuevoSemestre;
    }

    inscribirse(){
        console.log(`Hola ${this.nombre}, ya estás inscrito/a en la carrera ${this.carrera}`)
    }
}