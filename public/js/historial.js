import { postcondiciones } from "../services/servicesform.js";
const filtroEstudiante = document.getElementById("filtroEstudiante");
const filtroFecha = document.getElementById("filtroFecha");
const filtroEstado = document.getElementById("filtroEstado");
const tablaSolicitudes = document.getElementById("tablaSolicitudes");

async function agregarHistorial() {
const historial = {
  filtroEstudiante: filtroEstudiante.value,
  filtroFecha: filtroFecha.value,
  filtroEstado: filtroEstado.value, 
  tablaSolicitudes: tablaSolicitudes.value,
  }  

  const peticion = await postcondiciones (historial, "historial")
}