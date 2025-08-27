const usuario = document.getElementById("usuario")
const fecha = document.getElementById("fecha")
const hora = document.getElementById("hora")
const tiempo = document.getElementById("tiempo")
const codigo = document.getElementById("codigo")


function crearPrestamo() {
  const prestamo = {
    usuario: usuario.value,
    fecha: fecha.value,
    hora: hora.value,
    tiempo: tiempo.value,
    codigo: codigo.value
  };
  return prestamo;
}
