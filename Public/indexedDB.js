
//---CREACION Y APERTURA DE LA INDEXDB

const indexedDB=window.indexedDB;
let db
const conexion  = indexedDB.open("Usuarios Registrados",1);

conexion.onsuccess = () => {
    db = conexion.result
    console.log("Base de datos abierta",db)
}

conexion.onerror = (error) => {
    console.log("Error:",error)
    
}
conexion.onupgradeneeded = (event) => {
    const db = event.target.result
    console.log("Base de datos creada", db)
    const coleccion= db.createObjectStore("Usuarios",{keyPath:"correo"})
}

////----MANEJO DE DATOS DE LA BASE DE DATOS-----------------


export const guardarDatos = (objeto) => {
    const transaccion = db.transaction(["Usuarios"],"readwrite")
    const coleccionDatos = transaccion.objectStore("Usuarios")
    const conexion = coleccionDatos.add(objeto)
    consultarDatos();
}

//sólo devuelve un registro
export const obtenerDatos = (email,password) => {
    const transaccion = db.transaction(["Usuarios"],"readonly")
    const coleccionDatos = transaccion.objectStore("Usuarios")
    const conexion = coleccionDatos.get(email) 

    conexion.onsuccess = (event) => {
        const cursor = event.target
        console.log(cursor)

        if(cursor.result)
        {
            const passwordReg = event.target.result.contraseña
            const nombre = event.target.result.nombre
            if(passwordReg == password)
            {
                alert("Welcome back " + nombre)
            }
            else{
                alert("Contraseña incorrecta")
            }
            
            console.log(nombre,passwordReg) 
        }
        else
        {
            alert("Usuario incorrecto o inexistente, verifique de nuevo.")
        }
    }
    
}    

export const actualizarDatos = (event) => {
    

}

export const eliminarDatos = (event) => {

}

export const consultarDatos = (event) => {
    const transaccion = db.transaction(["Usuarios"],"readonly")
    const coleccionDatos = transaccion.objectStore("Usuarios")
    console.log("Lista de usuarios:")
    const conexion = coleccionDatos.openCursor()

    conexion.onsuccess = (event) => {
        const cursor = event.target.result
        
        if(cursor){
            
            console.log(cursor.value)
            cursor.continue();
        }
        else{
            console.log("NO hay más usuarios")
        }
        //cursor.continue()
        }
}  



