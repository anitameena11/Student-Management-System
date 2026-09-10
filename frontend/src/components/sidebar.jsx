import { FiBarChart2, FiBookOpen, FiCalendar, FiClipboard, FiFileText, FiSettings, FiUsers, FiX } from "react-icons/fi";
import "../styles/sidebar.css";

const menuItems = [["Dashboard", FiBarChart2], ["Students", FiUsers], ["Teachers", FiBookOpen], ["Notices", FiFileText], ["Events", FiCalendar], ["Timetable", FiClipboard], ["Settings", FiSettings]];

function Sidebar({ isOpen, onClose }) {
  return <><div className={`sidebar-backdrop ${isOpen ? "visible" : ""}`} onClick={onClose} /><aside className={`sidebar ${isOpen ? "open" : ""}`}><div className="sidebar-heading"><span>Workspace</span><button type="button" onClick={onClose} aria-label="Close menu"><FiX /></button></div><nav aria-label="Main navigation"><p className="nav-label">Overview</p>{menuItems.map(([label, Icon], index) => <button className={`nav-item ${index === 0 ? "active" : ""}`} type="button" key={label}><Icon /><span>{label}</span>{index === 0 && <span className="active-indicator" />}</button>)}</nav><div className="sidebar-footer"><div className="help-icon">?</div><div><strong>Need help?</strong><span>Visit our support center</span></div></div></aside></>;
}

export default Sidebar;