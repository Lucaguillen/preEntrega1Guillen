function registrarse (){
    alert("Para continuar se debe registrar")
    let usuarioRegistro = prompt("Defina su nombre de usuario")
    let contrasenaRegistro = prompt("Defina su contraseña")
    if ((usuarioRegistro !== "") && (contrasenaRegistro !== "")){
        ingresar ()
    }else{
        alert("Los espacios no pueden estar vacios")
        registrarse()
    }
    function ingresar (){
        alert("Ingrese su usuario y contraseña")
        let usuarioIngreso = prompt("Ingrese su nombre de usuario")
        let contrasenaIngreso = prompt("Ingrese su contraseña")
        if ((usuarioRegistro === usuarioIngreso) && (contrasenaRegistro === contrasenaIngreso)){
            alert ("Sesión iniciada con exito, puede continuar al sitio")
        }else {
            alert("No se pudo iniciar la sesión, la contraseña o el usuario son incorrectos")
            ingresar()
        }
        seleccionMarca()
    }
}
function seleccionMarca(){
    let marca = prompt("Seleccione que marca busca \n Nike \n New Blance")
    if ((marca === "nike") || (marca === "Nike")){
        marcaNike()
    }else if ((marca=== "New Balance")|| (marca==="new balance")){
        marcaNewBalance ()
    }else{
        alert("Seleccione una marca correcta")
        seleccionMarca()
    }
}
function ingreseCodigo (){
    let codigo = prompt("Ingrese codigo de descuento si conoce uno, de lo contrario ingrese 0")
    if (codigo === codigoDescuento){
       DescuentoAplicado = precio * descuento / 100
       alert("Se aplicó codigo del %50 de descuento")
    }else if (codigo == "0"){
       DescuentoAplicado = 0
    }else{
        alert(" Codigo de descuento incorrecto")
        ingreseCodigo ()
    }
}
function marcaNike(){
    let item = prompt("Seleccione el modelo de calzado: \n AirForce \n Dunk")
    if ((item === "Airforce") || (item === "airforce")){
        ingreseCodigo (precio = AirForce * 1.22)
        let PrecioFinal = precio - DescuentoAplicado
        alert("Seleccionaste AirForce por un precio de:" + " " + "$UY" + " " + PrecioFinal)
        pregunta = prompt("Desea seguir comprando? \n Si \n No")
    }else if ((item === "Dunk") || (item === "dunk")){ 
        ingreseCodigo (precio = dunk *1.22)
        let PrecioFinal = precio - DescuentoAplicado
        alert("Seleccionaste Dunk por un precio de:" + " " + "$UY" + " " + PrecioFinal)
        pregunta = prompt("Desea seguir comprando? \n Si \n No")
    }else {
        alert ("Modelo incorrecto")
        marcaNike ()
    }
}
function marcaNewBalance(){
    let item = prompt("Seleccione el modelo de calzado: \n 550 \n MR530")
    if (item === "550"){
        ingreseCodigo (precio = N550 * 1.22)
        let PrecioFinal = precio - DescuentoAplicado
        alert("Seleccionaste 550 por un precio de:" + " " + "$UY" + " " + PrecioFinal)
        pregunta = prompt("Desea seguir comprando? \n Si \n No")
    }else if ((item === "MR530") || (item === "mr530")){ 
        ingreseCodigo (precio = MR530 *1.22)
        let PrecioFinal = precio - DescuentoAplicado
        alert("Seleccionaste MR530 por un precio de:" + " " + "$UY" + " " + PrecioFinal)
        pregunta = prompt("Desea seguir comprando? \n Si \n No")
    }else {
        alert ("Modelo incorrecto")
        marcaNewBalance ()
    }
}
let codigoDescuento = "LucaGuillenMiAlumnoFavorito"
let DescuentoAplicado = 0
let descuento = 50 
let AirForce = 7800
let dunk = 7300
let N550 = 8000
let MR530 = 5700
let pregunta
registrarse()
while ((pregunta != "no") || (pregunta === "No")) {
    if((pregunta === "si") || (pregunta === "Si")){
        seleccionMarca ()
    }
}
alert("Muchas Gracias por su compra!")