    import { postcondiciones } from "../services/servicesform.js";
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmarContra = document.getElementById("confirmar").value;
    const btnAgg = document.getElementById("btnAgg")

    btnAgg.addEventListener("click",nuevoUsuario)

    async function nuevoUsuario() {
      const usuario = {
        nombre: nombre.value,
        email: email.value,
        password: password.value,
        confirmar: confirmar.value,
      }  

      const peticion = await postcondiciones(usuario,"usuarios")
      
   }
