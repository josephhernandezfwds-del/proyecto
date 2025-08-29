import { postcondiciones } from "../services/servicesform.js";
const nombre = document.getElementById("nombre");
const sede = document.getElementById("sede")
const fechanacimiento = document.getElementById("fechanacimiento");
const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña");
const btn1 = document.getElementById("btn1");


btn1.addEventListener("click",agregarRegistro)

async function agregarRegistro() {
    const usuario = { 
           nombre: nombre.value,
           sede: sede.value,
           fechanacimiento: fechanacimiento.value,
           correo: correo.value,
           contraseña: contraseña.value
    }

    const peticion = await postcondiciones(usuario,"usuarios")
}