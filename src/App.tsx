// import DynamicForm from "./component/DynamicForm"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/sidebar/header/Layout";
import { HomePages } from "./pages/HomePages";
import { PageProject } from "./pages/PageProject";
import { StudyPages } from "./pages/StudyPages";
import { AboutPages } from "./pages/AboutPages";

import { ContextProvider } from "./usecontext/ ContextProvider";
import { Resultado } from "./component/Resultado";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Dashboard />
        <Layout>
          <Routes>
            <Route path="home" element={<HomePages />} />
            <Route path="proyecto" element={<PageProject />} />
            <Route path="study" element={<StudyPages />} />
            <Route path="about" element={<AboutPages />} />
            <Route path="*" element={<Resultado />} />
          </Routes>
        </Layout>
      </ContextProvider>
    </Router>
  );
}

export default App;
