import { FiBell, FiLogOut, FiMenu, FiSearch } from "react-icons/fi";
import "../styles/navbar.css";

function Navbar({ onMenuClick }) {
  return <header className="topbar">
    <button className="menu-button" type="button" onClick={onMenuClick} aria-label="Open menu"><FiMenu /></button>
    <div className="brand-mark">SM</div><div className="brand-title">Student Management System</div>
    <label className="global-search"><FiSearch /><input type="search" placeholder="Search anything..." aria-label="Search anything" /><kbd>⌘ K</kbd></label>
    <div className="topbar-actions"><button className="icon-button notification-button" type="button" aria-label="Notifications"><FiBell /><span /></button><div className="admin-profile"><span className="profile-avatar">AD</span><span className="profile-name">Admin</span></div><button className="logout-button" type="button"><FiLogOut /><span>Logout</span></button></div>
  </header>;
}

export default Navbar;