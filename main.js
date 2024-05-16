
const boton = document.getElementById("boton").addEventListener("click",Formulario)
const mostrar = document.getElementById("mostrar").addEventListener("click",MostrarDatos)
const MisTurno= [];
  //localStorage.getItem("MisTurnos");
   let DatosGuardados = JSON.parse(localStorage.getItem("MisTurnos"));

   for (let i = 0; i < DatosGuardados.length; i++) {
    MisTurno.push(DatosGuardados[i]);
}

   
   //MisTurno.push(DatosEnElArray);

function Formulario(){
  
  const DatosTurno = document.getElementById ("miTurno")
  let Turno = {
    nombre: DatosTurno.nombre.value,
    apellido: DatosTurno.apellido.value,
    ciudad: DatosTurno.ciudad.value,
    email: DatosTurno.email.value,
    fecha: DatosTurno.fecha.value,
    hora: DatosTurno.hora.value
  };
   
  MisTurno.push(Turno);
  
  
  let DatosJson= JSON.stringify(MisTurno);

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
 







