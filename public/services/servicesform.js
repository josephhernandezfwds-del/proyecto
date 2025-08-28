async function getcondiciones(endpoint) {
      try {
            const response = await fetch(`http://localhost:3001/${endpoint}`, {
                  method: 'GET',
                  headers: {
                        'Content-Type': 'application/json'
                  }

            })

            const condiciones = await response.json()

            return condiciones

      } catch (error) {

            console.error("Hay un error al obtener las condiciones", error)
            throw error

      }

}
export { getcondiciones }
    
async function postcondiciones(objcondiciones) {
      try {
            const response = await fetch(`http://localhost:3001/${endpoint}`, {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(objcondiciones)
            });
            const condiciones = await response.json()
            return condiciones
      } catch (error) {
            console.error("Hay un error al obtener las condiciones", error)
            throw error

      }
}
export { postcondiciones }


async function putcondiciones(objcondiciones,endpoint) {
      try {
            const response = await fetch(`http://localhost:3001/${endpoint}`, {
                  method: 'PATCH',
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(objcondiciones)
                  
            });
            const condiciones = await response.json()
            return condiciones
      } catch (error) {
            console.error("Hay un error al obtener las condiciones", error)
            throw error

      }
}
export { putcondiciones }


async function deletecondiciones(objcondiciones) {
      try {
            const response = await fetch(`http://localhost:3001/${endpoint}`, {
                  method: 'DELETE',
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  
            });
            const condiciones = await response.json()
            return condiciones
      } catch (error) {
            console.error("Hay un error al obtener las condiciones", error)
            throw error

      }
}
export { deletecondiciones }