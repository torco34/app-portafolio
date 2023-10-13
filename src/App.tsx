// import DynamicForm from "./component/DynamicForm"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, RegistroDeConferencia, Registro, Curso, Borrador } from "./component";
import { Proyecto } from "./component/Proyecto";
import {ProyectoFields} from "./component/proyectoPresentar/ProyectoFields";


function App() {

  return (
    <div >

      <Router>
        <Header />
        <Routes>
          <Route path="/registro" element={<Registro />} />
          <Route path="/proyecto" element={<ProyectoFields />} />
          <Route path="/registro2" element={<RegistroDeConferencia />} />
          <Route path="/curso" element={<Curso />} />
          <Route path="/proyecto" element={<Proyecto />} />
          <Route path="/borrado" element={<Borrador />} />
        </Routes>
      </Router>


    </div>
  )
}

export default App
