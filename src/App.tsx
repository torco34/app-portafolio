// import DynamicForm from "./component/DynamicForm"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, RegistroDeConferencia, Registro } from "./component";



function App() {

  return (
    <div >

      <Router>
        <Header />
        <Routes>
          <Route path="/registro" element={<Registro />} />
          <Route path="/registro2" element={<RegistroDeConferencia />} />
        </Routes>
      </Router>


    </div>
  )
}

export default App
