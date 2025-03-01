"use client";

import {
  FaCog,
  FaDatabase,
  FaProjectDiagram,
  FaShieldAlt,
  FaCheckCircle,
  FaUser,
  FaChevronUp,
} from "react-icons/fa";

export default function Sidebar({ isOpen, activeTab, setActiveTab }: { 
  isOpen: boolean; 
  activeTab: string; 
  setActiveTab: (tab: string) => void; 
}) {
  return (
    <aside
      className={`h-screen flex flex-col justify-between transition-all duration-300 overflow-hidden border-r border-gray-300 ${
        isOpen ? "w-1/5 p-4" : "w-0 p-0"
      } bg-[#f9f9f9]`}
    >
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-2xl font-bold text-gray-800">🚀 LOGO</span>
        </div>

        <nav className="space-y-[4px]">
          <SidebarItem
            icon={<FaCog />}
            label="Basic Config"
            isActive={activeTab === "Basic Config"}
            onClick={() => setActiveTab("Basic Config")}
          />
          <SidebarItem
            icon={<FaDatabase />}
            label="RAG"
            isActive={activeTab === "RAG"}
            onClick={() => setActiveTab("RAG")}
          />
          <SidebarItem
            icon={<FaProjectDiagram />}
            label="Workflows"
            isActive={activeTab === "Workflows"}
            onClick={() => setActiveTab("Workflows")}
          />
          <SidebarItem
            icon={<FaShieldAlt />}
            label="Security Overview"
            isActive={activeTab === "Security Overview"}
            onClick={() => setActiveTab("Security Overview")}
          />
          <SidebarItem
            icon={<FaCheckCircle />}
            label="Overview"
            isActive={activeTab === "Overview"}
            onClick={() => setActiveTab("Overview")}
          />
        </nav>
      </div>

      <div className={`mt-auto ${isOpen ? "block" : "hidden"}`}>
        <div className="flex items-center justify-between p-3 rounded cursor-pointer hover:bg-gray-200 transition-all">
          <div className="flex items-center space-x-2">
            <FaUser size={20} className="text-gray-700" />
            <span className="text-sm text-gray-600">Username</span>
          </div>
          <FaChevronUp size={18} className="text-gray-700" />
        </div>
      </div>
    </aside>
  );
}

function SidebarItem({
  icon,
  label,
  isActive,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center space-x-2 p-2 rounded cursor-pointer transition-all ${
        isActive
          ? "bg-gray-300 font-semibold shadow-sm"
          : "hover:bg-gray-200 font-normal"
      }`}
    >
      {icon}
      <span className="text-gray-600">{label}</span>
    </div>
  );
}
