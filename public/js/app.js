  const usuario = document.getElementById("usuario");
  const fecha = document.getElementById("fecha");
  const horaSalida = document.getElementById("hora");
  const fechaRegreso = document.getElementById("tiempo");
  const horaRegreso = document.getElementsByName("hora de regreso")[0];
  const codigo = document.getElementById("codigo");
  const firma = document.getElementById("firma-del-estudiante");
const userID = document.getElementById("userID");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const mensaje = document.getElementById("mensaje");
const btnCerrar = document.getElementById("cerrarSesion");



  function crearPrestamo() {
    return {
      usuario: usuario.value,
      fechaSalida: fecha.value,
      horaSalida: horaSalida.value,
      fechaRegreso: fechaRegreso.value,
      horaRegreso: horaRegreso.value,
      codigo: codigo.value,
      firma: firma.value
    };
  }


  function validarPrestamo(prestamo) {
    for (let key in prestamo) {
      if (!prestamo[key]) {
        alert("El campo " + key + " es obligatorio.");
        return false;
      }
    }
    return true;
  }

  
  function guardarPrestamo(prestamo) {
    const prestamos = JSON.parse(localStorage.getItem("prestamos")) || [];
    prestamos.push(prestamo);
    localStorage.setItem("prestamos", JSON.stringify(prestamos));
    alert("✅ Préstamo registrado con éxito");
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

  
  function registrarPrestamo(event) {
    event.preventDefault();
    const prestamo = crearPrestamo();
    if (validarPrestamo(prestamo)) {
      guardarPrestamo(prestamo);
      limpiarFormulario();
    }
  }


  const form = document.querySelector("form"); 
  form.addEventListener("submit", registrarPrestamo);



const userDB = {
  id: "estudiante123",
  password: "1234"
};



loginBtn.addEventListener("click", function() {
 
  if (userID.value === userDB.id && password.value === userDB.password) {
    
    localStorage.setItem("usuario", userID.value);

   
    window.location.href = "principal.html";
  } else {
    mensaje.textContent = "❌ Usuario o contraseña incorrectos.";
  }
});


  const user = localStorage.getItem("usuario");
  console.log("Usuario en sesión:", user); // Ejemplo: estudiante123
  //1234

  
//   if (!user) {
//     window.location.href = "login.html";
//   }

  
//   btnCerrar.addEventListener("click", function () {
//     localStorage.removeItem("usuario");
//     window.location.href = "login.html"; 
//   });
//restamo de computadoras funcionaando con el de.json 

// git pull origin rama-hillary 