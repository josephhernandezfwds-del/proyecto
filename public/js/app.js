import { postcondiciones } from "../services/servicesform.js";
// Obtener elementos del DOM
const password = document.getElementById("password");

const usuario = document.getElementById("usuario");
const fecha = document.getElementById("fecha");
const horaSalida = document.getElementById("hora");
const fechaRegreso = document.getElementById("tiempo");
const horaRegreso = document.getElementById("horas");
const codigo = document.getElementById("codigo");
const firma = document.getElementById("firmadelestudiante");
const formulario = document.getElementById("formulario");
const btnCerrar = document.getElementById("btnCerrar");

async function crearPrestamo() {
  const objPrestamo = {
    userID: localStorage.getItem("idUsuario"),
    fechaSalida: fecha.value,
    horaSalida: hora.value,
    fechaRegreso: tiempo.value,
    horaRegreso: horas.value,
    codigo: codigo.value,
    firma: firmadelestudiante.value,
    estado: "Sin revisar"
  }
    const peticion = await postcondiciones(objPrestamo,"permisos");
    console.log(peticion);
    limpiarFormulario()
    
}

function limpiarFormulario() {
  usuario.value = "";
  fecha.value = "";
  horaSalida.value = "";
  fechaRegreso.value = "";
  horaRegreso.value = "";
  codigo.value = "";
  firma.value = "";
}

formulario.addEventListener("click",crearPrestamo)

