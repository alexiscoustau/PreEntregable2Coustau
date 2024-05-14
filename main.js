
const boton = document.getElementById("boton").addEventListener("click",Formulario)
const mostrar = document.getElementById("mostrar").addEventListener("click",MostrarDatos)


function Formulario(){
  let MiTurno=[];

  

  const DatosTurno = document.getElementById ("miTurno")
  let Turno = {
    nombre: DatosTurno.nombre.value,
    apellido: DatosTurno.apellido.value,
    ciudad: DatosTurno.ciudad.value,
    email: DatosTurno.email.value,
    fecha: DatosTurno.fecha.value,
    hora: DatosTurno.hora.value
  }
   
  MiTurno.push(Turno)
 
  let DatosJson= JSON.stringify(MiTurno);
  localStorage.setItem("MisTurnos",DatosJson);
  

  
  }
   
function MostrarDatos() {
   
  if (localStorage.getItem("MisTurnos")) {
    let DatosTurno = JSON.parse(localStorage.getItem("MisTurnos"));
    console.log(DatosTurno);
    
  } else {

    console.log("no hay datos")
  }
    
  } 
 







