import { getcondiciones} from "../services/servicesform.js";
const tablaHistorial = document.getElementById("tablaHistorial")

    // {
    //   "id": "16b8",
    //   "userID": "12dd",
    //   "fechaSalida": "2025-09-02",
    //   "horaSalida": "10:10",
    //   "fechaRegreso": "2010-10-10",
    //   "horaRegreso": "10:10",
    //   "codigo": "10",
    //   "firma": "10"
    // }

async function traerSolicitudes() {
  const permisos = await getcondiciones("permisos")
  permisos.forEach((permiso)=>{
      const tdEstudiante = document.createElement("td")
      const tdFechaSalida = document.createElement("td")
      const tdFechaRegreso = document.createElement("td")
      const tdCodigo = document.createElement("td")
      const tdEstado = document.createElement("td")
      const trFila = document.createElement("tr")

      tdEstudiante.textContent = permiso.userID
      tdFechaSalida.textContent = permiso.fechaSalida
      tdFechaRegreso.textContent = permiso.fechaRegreso
      tdCodigo.textContent = permiso.codigo
      tdEstado.textContent = permiso.estado


      trFila.appendChild(tdEstudiante)
      trFila.appendChild(tdFechaSalida)
      trFila.appendChild(tdFechaRegreso)
      trFila.appendChild(tdCodigo)
      trFila.appendChild(tdEstado)

      tablaHistorial.appendChild(trFila)
  })
  
}
traerSolicitudes()


 
 


 



