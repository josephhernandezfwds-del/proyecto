const apiUrl = "http://localhost:3001/permisos";

export async function obtenerSolicitudes() {
  const res = await fetch(apiUrl);
  return await res.json();
}

export async function crearSolicitud(data) {
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return await res.json();
}

export async function actualizarSolicitud(id, data) {
  const res = await fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return await res.json();
}

export async function cambiarEstado(id, estadoNuevo) {
  const res = await fetch(`${apiUrl}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ estado: estadoNuevo })
  });
  return await res.json();
}

export async function eliminarSolicitud(id) {
  await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
}
