import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home/home";
import Enterprise from "./pages/Enterprise/main";
import Policies from "./pages/Policy/main";
import Assets from "./pages/assets";
import Report from "./pages/Reports/main";

const CreateUseCase = () => <div style={{ padding: "1rem" }}>Create a new Use Case</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<CreateUseCase />} />
          <Route path="policies" element={<Policies />} />
          <Route path="Enterprise" element={<Enterprise />} />
          <Route path="reports" element={<Report />} />
          <Route path="assets" element={<Assets />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
