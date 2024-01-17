// import DynamicForm from "./component/DynamicForm"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import { Layout } from "./component/header/Layout";
import { HomePages } from "./pages/HomePages";
import { Project } from "./pages/Project";
import { StudyPages } from "./pages/StudyPages";
import { AboutPages } from "./pages/AboutPages";
// import { Curso } from "./component/Curso";



function App() {

  return (
    <div >

      <Router>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePages />} />
            <Route path="proyecto" element={<Project />} />
            <Route path="study" element={<StudyPages />} />
            <Route path="about" element={<AboutPages />} />
          </Route>
        </Routes>

      </Router>


    </div>
  )
}

export default App
