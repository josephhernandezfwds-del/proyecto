import { cambiarEstado, eliminarSolicitud } from "./api.js";

export function renderSolicitudes(lista, contenedor) {
  contenedor.innerHTML = "";

  lista.forEach(s => {
    const item = document.createElement("div");
    item.className = "solicitud";
    item.innerHTML = `
      <p><strong>${s.usuario}</strong> (${s.userID})</p>
      <p>Salida: ${s.fechaSalida} ${s.horaSalida}</p>
      <p>Regreso: ${s.fechaRegreso} ${s.horaRegreso}</p>
      <p>Estado: <span class="estado">${s.estado}</span></p>
      <button data-id="${s.id}" data-accion="aprobar">✅ Aprobar</button>
      <button data-id="${s.id}" data-accion="rechazar">❌ Rechazar</button>
      <button data-id="${s.id}" data-accion="eliminar">🗑️ Eliminar</button>
    `;
    contenedor.appendChild(item);
  });

  // Delegación de eventos
  contenedor.addEventListener("click", async (e) => {
    if (e.target.tagName === "BUTTON") {
      const id = e.target.dataset.id;
      const accion = e.target.dataset.accion;

      if (accion === "aprobar") await cambiarEstado(id, "aprobado");
      if (accion === "rechazar") await cambiarEstado(id, "rechazado");
      if (accion === "eliminar") await eliminarSolicitud(id);

      location.reload(); // refrescar después de acción
    }
  });
}
