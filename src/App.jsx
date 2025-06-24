import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home/home";
import Enterprise from "./pages/Enterprise/main";
import Policies from "./pages/Policy/main";
import Assets from "./pages/assets";
import Report from "./pages/Reports/main";
import UseCase from "./pages/useCase/main";
import Questionare from "./pages/quetionare/main";
import Projects from "./pages/Projects/main";
import ProjectView from "./pages/Projects/projectView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="policies" element={<Policies />} />
          <Route path="Enterprise" element={<Enterprise />} />
          <Route path="reports" element={<Report />} />
          <Route path="assets" element={<Assets />} />
          <Route path="usecase" element={<UseCase/>} />
          <Route path="questionare" element={<Questionare/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="project-view" element={<ProjectView/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
