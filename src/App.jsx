import { Outlet,BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";

const Layout = () => (
  <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
    <Navbar />
    <Box sx={{ display: "flex", flex: 1 }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <Outlet />
      </Box>
    </Box>
  </Box>
);

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
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
