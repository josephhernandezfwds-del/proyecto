// Reglas de negocio
export function validarSolicitud(solicitud) {
  if (!solicitud.userID || !solicitud.usuario) {
    return false;
  }
  return true;
}

export function estadoValido(estado) {
  return ["pendiente", "aprobado", "rechazado"].includes(estado);
}
