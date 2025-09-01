let paginaActual = 1;
    const filasPorPagina = 3;

    const permisos = [
      {
        "id": "1b86",
        "userID": "estudiante123",
        "password": "1234",
        "usuario": "uiklnkbkj",
        "fechaSalida": "2025-08-29",
        "horaSalida": "10:14",
        "fechaRegreso": "2025-08-29",
        "horaRegreso": "10:15",
        "codigo": "a",
        "firma": "llllll"
      },
      {
        "id": "8398",
        "userID": "estudiante123",
        "password": "1234",
        "usuario": "uiklnkbkj",
        "fechaSalida": "2025-08-29",
        "horaSalida": "10:14",
        "fechaRegreso": "2025-08-29",
        "horaRegreso": "10:15",
        "codigo": "a",
        "firma": "llllll"
      }
    ];

    function mostrarPermisos(pagina) {
      const inicio = (pagina - 1) * filasPorPagina;
      const fin = inicio + filasPorPagina;
      const lista = permisos.slice(inicio, fin);

      const cuerpoTabla = document.getElementById("tablaPermisos");
      cuerpoTabla.innerHTML = "";

      lista.forEach((permiso, i) => {
        const fila = `
          <tr>
            <td>${inicio + i + 1}</td>
            <td>${permiso.usuario}</td>
            <td>${permiso.fechaSalida}</td>
            <td>${permiso.horaSalida}</td>
            <td>${permiso.fechaRegreso}</td>
            <td>${permiso.horaRegreso}</td>
            <td>${permiso.codigo}</td>
            <td>${permiso.firma}</td>
          </tr>
        `;
        cuerpoTabla.innerHTML += fila;
      });

      mostrarPaginacion();
    }

    function mostrarPaginacion() {
      const totalPaginas = Math.ceil(permisos.length / filasPorPagina);
      const contenedor = document.getElementById("paginacion");
      contenedor.innerHTML = "";

      for (let i = 1; i <= totalPaginas; i++) {
        const btn = document.createElement("button");
        btn.innerText = i;
        if (i === paginaActual) btn.classList.add("active");
        btn.addEventListener("click", () => {
          paginaActual = i;
          mostrarPermisos(paginaActual);
        });
        contenedor.appendChild(btn);
      }
    }

    // Inicial
    mostrarPermisos(paginaActual);
