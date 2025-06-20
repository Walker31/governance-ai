import { NavLink } from "react-router-dom";
import { FaHome, FaFolderPlus, FaChartBar, FaCog } from "react-icons/fa";
import DescriptionIcon from '@mui/icons-material/Description';
import BoltSharpIcon from '@mui/icons-material/BoltSharp';
import AssessmentIcon from '@mui/icons-material/Assessment';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-[#1d4ed8] text-white flex flex-col py-6 px-4 shadow-md">
      <nav className="flex flex-col space-y-2">
        <SidebarItem icon={<FaHome />} label="Dashboard" to="/" />
        <SidebarItem icon={<DescriptionIcon />} label="Ai-Policies" to="/create" />
        <SidebarItem icon={<FaChartBar />} label="Ai-Assets" to="/analytics" />
        <SidebarItem icon={<AssessmentIcon />} label="Frameworks" to="/settings" />
        <SidebarItem icon={<BoltSharpIcon />} label="Enterprise AI-Readiness" to="/settings" />
      </nav>
    </aside>
  );
};

const SidebarItem = ({ icon, label, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center space-x-3 px-4 py-2 rounded-md transition duration-200 ${
        isActive
          ? "bg-white text-[#1d4ed8] font-semibold"
          : "hover:bg-[#3b6ef3] hover:text-white"
      }`
    }
  >
    <span className="text-lg">{icon}</span>
    <span className="text-sm">{label}</span>
  </NavLink>
);

export default Sidebar;
