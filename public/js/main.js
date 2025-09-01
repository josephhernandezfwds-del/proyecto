import { obtenerSolicitudes } from "../js/api.js";
import { renderSolicitudes } from "../js/ui.js";
import { validarSolicitud } from "./negocio.js";

document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("listaSolicitudes");
  const datos = await obtenerSolicitudes();
  renderSolicitudes(datos, contenedor);
});
