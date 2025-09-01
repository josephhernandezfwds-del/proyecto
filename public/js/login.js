import { postcondiciones } from "../services/servicesform";

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const submit = document.getElementById("btnagg");

submit.addEventListener("click,iniciarUsuario")

async function iniciarUsuario() {
    const usuario = {
        nombre: nombre.value,
        email : email.value,
        password : password.value,
        confirmar : confirmar.value,



    }

    const peticion = await postcondiciones(usuarios,"usuarios")
    
}



