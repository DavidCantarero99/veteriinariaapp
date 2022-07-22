import React, { Fragment, useState } from "react";

const Formulario = () => {
  // State de Citas

  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  
const[error, actualizarError]=useState(false)

  const actualizarState = e => {
    actualizarCita({
        ...cita,
        [e.target.name]: e.target.value
    })
  };

  const{mascota , propietario , fecha , hora , sintomas} =cita

  // cuando se envia cita 
  const submitCita = e => {
    e.preventDefault();

    // Validar 
if( mascota.trim()==='' || propietario.trim()==='' || fecha.trim()==='' || hora.trim()===''|| sintomas.trim()==='' ){
    actualizarError(true)
    return
}
// asignar iD 
console.log(cita)

// Crear cita 
// reiniciar form
  }


   
  return (
    <Fragment>
      <h2>Crear Cita</h2>

        {error ? <p className="alerta-error">No se admiten Campos Vacios</p> :null}
        

      <form>
        <label>Nombre de la Mascota </label>

        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de la Mascota:"
          onChange={actualizarState}
          value={mascota}
        />

        <label>Nombre de Propietario</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Propietario:"
          onChange={actualizarState}
          value={propietario}
        />

        <label>Fecha de Consulta</label>
        <input type="date" name="fecha" className="u-full-width" onChange={actualizarState} value={fecha}/>

        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" onChange={actualizarState} value={hora}/>

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          placeholder="Espicifique Sitomas"
          onChange={actualizarState}
          value={sintomas}
        />

        <button type="submit" className="u-full-width button-primary" onClick={submitCita}>
          Solicitar Cita
        </button>
      </form>
    </Fragment>
  );
};
export default Formulario;
