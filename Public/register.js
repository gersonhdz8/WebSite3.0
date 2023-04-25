import { guardarDatos, obtenerDatos, actualizarDatos,  eliminarDatos, consultarDatos } from "./indexedDB.js"


let nombreUsuario=document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')
let password_confirm = document.getElementById('confirm-password')

let btnRegistro = document.getElementById('btnRegister')


btnRegistro.addEventListener('click',agregarUsuarioNuevo)


var nuevoUsuario={
    nombre:"",
    correo:"",
    contraseña:""
}

function agregarUsuarioNuevo()
{
    if (nombreUsuario.value.length == 0 || email.value.length == 0 || password.value.length == 0 || password_confirm.value.length == 0)
        {
            alert(" Por favor rellene todos los campos");
        }
    else if(password.value == password_confirm.value)
        {
            nuevoUsuario={
                nombre:nombreUsuario.value,
                correo: email.value,
                contraseña: password.value
            }; 
            guardarDatos(nuevoUsuario);         
            
            alert("Registro completado ") 
            nombreUsuario.value = "";
            email.value = "";
            password.value = "";
            password_confirm.value = "";
        }
    else
    {
        alert("Las contraseñas no coinciden")
    }   
};









