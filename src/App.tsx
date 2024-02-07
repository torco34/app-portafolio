// import DynamicForm from "./component/DynamicForm"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./component/header/Layout";
import { HomePages } from "./pages/HomePages";
import { PageProject } from "./pages/PageProject";
import { StudyPages } from "./pages/StudyPages";
import { AboutPages } from "./pages/AboutPages";
import { ContactPages } from "./pages/ContactPages";
import { ContextProvider } from "./usecontext/ ContextProvider";
import { Resultado } from "./component/Resultado";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePages />} />
            <Route path="proyecto" element={<PageProject />} />
            <Route path="study" element={<StudyPages />} />
            <Route path="about" element={<AboutPages />} />
            <Route path="contact" element={<ContactPages />} />
            <Route path="*" element={<Resultado />} />
          </Route>
        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
