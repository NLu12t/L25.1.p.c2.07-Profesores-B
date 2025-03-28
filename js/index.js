/**
 * 5. PROFESORES-B
 * En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene
 * un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere
 * que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan
 * de la clase Cl_profesor.
 * Haga un programa que haga uso de la misma clase Cl_profesor del ejercicio anterior, lea los
 * datos de un profesor contratado y reporte su ingreso total.
 * 
 * Ejemplos de la corrida:
 * Nombre del profesor contratado: Rafael
 * Monto del bono: $30
 * Cantidad de horas: 15
 * Ingreso total del profesor Rafael: $180
 * Nombre del profesor contratado: Felicia
 * Monto del bono: $30
 * Cantidad de horas: 20
 * Ingreso total del profesor Felicia: $230
 */

// import Cl_profesor from "./Cl_profesor.js";
import Cl_contratado from "./Cl_contratado.js";

// let profesor = new Cl_profesor();
let profesor1 = new Cl_contratado("Rafael", 30, 15);
let profesor2 = new Cl_contratado("Felicia", 30, 20);

let salida1 = document.getElementById("salida1");
let salida2 = document.getElementById("salida2");

salida1.innerHTML = `
Nombre del profesor contratado: ${profesor1._nombre}<br>
Monto del bono: $${profesor1._bono}<br>
cantidad de horas: ${profesor1._horas}<br>
Ingreso total del profesor ${profesor1._nombre}: $${profesor1.ingresoTotal()}
<br><br> `;

salida2.innerHTML = `
Nombre del profesor contratado: ${profesor2._nombre} <br>
Monto del bono: $${profesor2._bono}<br>
cantidad de horas: ${profesor2._horas}<br>
Ingreso total del profesor ${profesor2._nombre}: $${profesor2.ingresoTotal()} <br> `;
