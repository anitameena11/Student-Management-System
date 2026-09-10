import { FiCalendar, FiFileText, FiTrendingUp, FiUsers } from "react-icons/fi";

const cards = [
  { title: "Total Students", value: "1,248", change: "+12.5%", icon: FiUsers, color: "violet", points: "0,34 12,30 25,33 38,18 51,23 64,15 78,19 92,7 105,12 120,2" },
  { title: "Teachers", value: "86", change: "+4.8%", icon: FiUsers, color: "blue", points: "0,34 14,31 26,28 39,31 52,20 65,24 78,16 91,19 105,9 120,12" },
  { title: "Notices", value: "24", change: "+8.2%", icon: FiFileText, color: "orange", points: "0,34 12,25 25,28 38,19 51,23 64,14 78,18 92,10 106,15 120,4" },
  { title: "Events", value: "18", change: "+10.1%", icon: FiCalendar, color: "green", points: "0,33 13,30 25,32 39,22 52,24 65,17 78,21 91,11 105,14 120,3" },
];

function DashboardCards() {
  return <section className="stats-grid" aria-label="Key statistics">{cards.map(({ title, value, change, icon: Icon, color, points }) => <article className="stat-card" key={title}><div className={`stat-icon ${color}`}><Icon /></div><div className="stat-content"><span>{title}</span><strong>{value}</strong><small><FiTrendingUp /> {change} <em>vs last month</em></small></div><svg className={`sparkline ${color}`} viewBox="0 0 120 40" role="img" aria-label={`${title} trend`}><polyline points={points} /></svg></article>)}</section>;
}

export default DashboardCards;
