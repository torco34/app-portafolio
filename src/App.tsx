// import DynamicForm from "./component/DynamicForm"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, RegistroDeConferencia, Registro, Curso } from "./component";
import { Proyecto } from "./component/Proyecto";


function App() {

  return (
    <div >

      <Router>
        <Header />
        <Routes>
          <Route path="/registro" element={<Registro />} />
          <Route path="/registro2" element={<RegistroDeConferencia />} />
          <Route path="/curso" element={<Curso />} />
          <Route path="/proyecto" element={<Proyecto />} />
        </Routes>
      </Router>


    </div>
  )
}

export default App
