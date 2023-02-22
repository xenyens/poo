import Estudiante from "./Estudiante.js";
import Persona from "./Persona.js";

const ramon = new Persona('Ramón Méndez',35,'Masculino',172);
const martha = new Estudiante('Martha Méndez',20,'Femenina',164,'Ingeniería en Sistemas Computacionales')

ramon.saludar();
ramon.nombrePersona = 'Ramón Trujillo'
ramon.saludar()
martha.saludar();
martha.inscribirse();

console.log(`${martha.nombrePersona}, se encuentra en el semestre ${martha.semestreEstudiante} de ${martha.carreraEstudiante}`)

martha.carreraEstudiante = 'Ingeniería Industrial'


console.log(`${martha.nombrePersona}, se encuentra en el semestre ${martha.semestreEstudiante} de ${martha.carreraEstudiante}`)