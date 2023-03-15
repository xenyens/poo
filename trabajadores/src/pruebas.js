import Paciente from "./Paciente.js";


const ximena = new Paciente('Ximena',20,75,165,1.3,'Femenina');

console.log(`${ximena.nombrePersona} requiere ${ximena.gastoEnergeticoTotal()} kcal/día`);
console.log(ximena.imc());