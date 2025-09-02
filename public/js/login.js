import { getcondiciones, postcondiciones } from "../services/servicesform.js";

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const submit = document.getElementById("btnAgg");

submit.addEventListener("click",iniciarUsuario)

async function iniciarUsuario() {
    const usuarios = await getcondiciones("usuarios")
    const usuarioEncontrado = usuarios.find((usuario)=> usuario.correo === email.value && usuario.contraseña === password.value)
    
    if (!usuarioEncontrado) {
            alert("Usuario no existe")
            return
    }
    
    alert("usuario encontrado")
    localStorage.setItem("idUsuario",usuarioEncontrado.id)
    window.location.href = "../pages/index.html"

}





