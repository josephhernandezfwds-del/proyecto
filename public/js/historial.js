const filtroEstudiante = document.getElementById("filtroEstudiante").value;
const filtroFecha = document.getElementById("filtroFecha").value;
const filtroEstado = document.getElementById("filtroEstado").value;


  
  // Función para mostrar los datos en la tabla
  function mostrarSolicitudes(data) {
    const tabla = document.getElementById("tablaSolicitudes");
    tabla.innerHTML = ""; // Limpiar tabla

    if (data.length === 0) {
      tabla.innerHTML = "<tr><td colspan='5'>No se encontraron resultados</td></tr>";
      return;
    }

    data.forEach(solicitud => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${solicitud.estudiante}</td>
        <td>${solicitud.fechaSalida}</td>
        <td>${solicitud.fechaRegreso}</td>
        <td>${solicitud.codigoComputadora}</td>
        <td>${solicitud.estado}</td>
      `;
      tabla.appendChild(fila);
    });
  }

  // Función para filtrar los datos
  function filtrarSolicitudes() {
    const filtroEstudiante = document.getElementById("filtroEstudiante").value.toLowerCase();
    const filtroFecha = document.getElementById("filtroFecha").value;
    const filtroEstado = document.getElementById("filtroEstado").value;

    const resultados = solicitudes.filter(solicitud => {
      const coincideEstudiante = solicitud.estudiante.toLowerCase().includes(filtroEstudiante);
      const coincideFecha = !filtroFecha || solicitud.fechaSalida === filtroFecha;
      const coincideEstado = !filtroEstado || solicitud.estado === filtroEstado;
      return coincideEstudiante && coincideFecha && coincideEstado;
    });

    mostrarSolicitudes(resultados);
  }

  // Mostrar todos al cargar
  window.onload = () => mostrarSolicitudes(solicitudes);

  const resultados = solicitudes.filter(solicitud => {
  const coincideEstado = !filtroEstado || solicitud.estado === filtroEstado;
  return coincideEstado;
});


