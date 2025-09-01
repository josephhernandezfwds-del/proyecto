
  const usuario = localStorage.getItem("usuario");

  if (!usuario) {
    
    window.location.href = "principal.html";
  } else {
    
    document.getElementById("saludo").textContent = "Bienvenido, " + usuario;
  }

  
  document.getElementById("cerrarSesion").addEventListener("click", () => {
    localStorage.removeItem("usuario");
    window.location.href = "pages/principal.html"; 
  });