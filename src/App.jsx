import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home/home";
import Enterprise from "./pages/Enterprise/main";

const CreateUseCase = () => <div style={{ padding: "1rem" }}>Create a new Use Case</div>;
const Analytics = () => <div style={{ padding: "1rem" }}>Analytics Page</div>;
const Settings = () => <div style={{ padding: "1rem" }}>Settings</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<CreateUseCase />} />
          <Route path="Enterprise" element={<Enterprise />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
