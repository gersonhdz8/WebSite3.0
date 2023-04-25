import { guardarDatos, obtenerDatos, actualizarDatos,  eliminarDatos, consultarDatos } from "./indexedDB.js"

let email = document.getElementById('email')
let password = document.getElementById('password')

let btnLogin = document.getElementById('btnIngresar');

document.querySelector("button").addEventListener("click", (e)=>{
    
    e.preventDefault();
    obtenerDatos(email.value,password.value);
})

