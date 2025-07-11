import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./components/layout";
import Home from "./pages/Home/home";
import Enterprise from "./pages/Enterprise/main";
import Policies from "./pages/Policy/main";
import Templates from "./pages/Templates/main";
import Assets from "./pages/assets";
import Report from "./pages/Reports/main";
import UseCase from "./pages/useCase/main";
import Questionare from "./pages/quetionare/main";
import Projects from "./pages/Projects/main";
import ProjectView from "./pages/Projects/projectView";
import UserManagement from "./pages/UserManagement/main";
import ChatAgent from "./pages/ChatAgent/main";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="policies" element={<Policies />} />
            <Route path="templates" element={<Templates />} />
            <Route path="Enterprise" element={<Enterprise />} />
            <Route path="reports" element={<Report />} />
            <Route path="assets" element={<Assets />} />
            <Route path="usecase" element={<UseCase/>} />
            <Route path="questionare" element={<Questionare/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="project-view" element={<ProjectView/>}/>
            <Route path="users" element={<UserManagement />} />
            <Route path="chat" element={<ChatAgent />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
