import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBars, FaChartBar } from "react-icons/fa";
import DescriptionIcon from '@mui/icons-material/Description';
import BoltSharpIcon from '@mui/icons-material/BoltSharp';
import AssessmentIcon from '@mui/icons-material/Assessment';

const Sidebar = ({ open, onToggle }) => {
  return (
    <aside
      className={`
        h-full bg-[#1d4ed8] text-white flex flex-col py-6 px-2 shadow-md
        transition-all duration-300
        overflow-y-auto
      `}
    >
      {/* Toggle Button */}
      <button
        className="mb-6 p-2 rounded hover:bg-[#3b6ef3] transition self-center"
        onClick={onToggle}
        aria-label={open ? "Close sidebar" : "Open sidebar"}
      >
        <FaBars size={22} />
      </button>
      <nav className="flex flex-col space-y-2">
        <SidebarItem icon={<FaHome />} label="Dashboard" to="/" open={open} />
        <SidebarItem icon={<DescriptionIcon />} label="Ai-Policies" to="/policies" open={open} />
        <SidebarItem icon={<FaChartBar />} label="Ai-Assets" to="/assets" open={open} />
        <SidebarItem icon={<AssessmentIcon />} label="Reports" to="/reports" open={open} />
        <SidebarItem icon={<BoltSharpIcon />} label="Enterprise AI-Readiness" to="/Enterprise" open={open} />
      </nav>
    </aside>
  );
};

const SidebarItem = ({ icon, label, to, open }) => (
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
    {open && <span className="text-sm">{label}</span>}
  </NavLink>
);

export default Sidebar;
