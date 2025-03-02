"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { BsLayoutSidebar } from "react-icons/bs"; 
import BasicConfig from "@/components/BasicConfig";
import Rag from "@/components/RAG";
import SecurityOverview from "@/components/SecurityOverview";
import Overview from "@/components/Overview";
import Workflow from "@/components/Workflows";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("Basic Config");
  const [basicConfigData, setBasicConfigData] = useState({});
  const [ragData, setRagData] = useState({});

  const renderContent = () => {
    switch (activeTab) {
      case "Basic Config":
        return <BasicConfig setActiveTab={setActiveTab} setBasicConfigData={setBasicConfigData} />;
      case "RAG":
        return <Rag setActiveTab={setActiveTab} basicConfigData={basicConfigData} setBasicConfigData={setBasicConfigData} setRagData={setRagData} />;
      case "Workflows":
        return <Workflow setActiveTab={setActiveTab} />;
      case "Security Overview":
        return <SecurityOverview setActiveTab={setActiveTab} />;
      case "Overview":
        return <Overview setActiveTab={setActiveTab} />;
      default:
        return <BasicConfig setActiveTab={setActiveTab} setBasicConfigData={setBasicConfigData} />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} activeTab={activeTab} setActiveTab={setActiveTab} />

      <div
        className={`fixed top-4 text-gray-800 cursor-pointer transition-all duration-300 ${
          isSidebarOpen ? "left-[21%]" : "left-4"
        }`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <BsLayoutSidebar size={20} />
      </div>

      <div
        className={`flex-1 flex flex-col p-6 transition-all duration-300 ${
          isSidebarOpen ? "ml-[20%]" : "ml-0"
        }`}
      >
        {renderContent()}
      </div>
    </div>
  );
}
