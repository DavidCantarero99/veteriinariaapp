import { Fragment } from "react";
import Formulario from "./components/Formulario";



function App() {
  return (

      <Fragment>
      <h2>Administrador Pacientes</h2>

      <div className="container">
        <div className="row">
          <div className="one-half column"> 
           <Formulario />
          </div>

          <div className="one-half column"> hola </div>
        </div>
      </div>
      </Fragment>
  );
}

export default App;
