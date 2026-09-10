import { useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import DashboardCards from "../components/DashboardCards";
import RecentActivity from "../components/RecentActivity";
import UpcomingEvents from "../components/UpcomingEvents";
import QuickActions from "../components/QuickActions";
import WelcomeBanner from "../components/WelcomeBanner";
import "../styles/dashboard.css";

function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return <div className="dashboard-shell"><Navbar onMenuClick={() => setSidebarOpen(true)} /><div className="dashboard-layout"><Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} /><main className="content"><div className="content-heading"><div><p className="eyebrow">Monday, September 9, 2026</p><h1>Good morning, Admin<span className="heading-dot">.</span></h1><p className="heading-copy">Here&apos;s what&apos;s happening across your school today.</p></div><button className="primary-button" type="button">+ <span>Add student</span></button></div><DashboardCards /><div className="content-grid"><RecentActivity /><UpcomingEvents /></div><QuickActions /><WelcomeBanner /></main></div></div>;
}

export default AdminDashboard;