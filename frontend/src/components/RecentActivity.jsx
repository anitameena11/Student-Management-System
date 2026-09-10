import { FiCalendar, FiClock, FiEdit3, FiFileText, FiUserPlus } from "react-icons/fi";

const activities = [
  [FiUserPlus, "Student enrolled", "Mia Thompson joined Grade 9 - A", "12 min ago", "violet"],
  [FiFileText, "Notice published", "Mid-term examination schedule", "45 min ago", "orange"],
  [FiCalendar, "Event created", "Annual sports day added to calendar", "2 hours ago", "blue"],
  [FiEdit3, "Teacher updated", "Profile updated by Admin", "4 hours ago", "green"],
  [FiClock, "Timetable changed", "Friday period 3 was rescheduled", "Yesterday", "pink"],
];

function RecentActivity() {
  return <article className="panel activity-panel"><div className="section-heading"><div><h2>Recent activity</h2><p>Stay up to date with school operations</p></div><button className="link-button" type="button">View all <span>→</span></button></div><div className="activity-list">{activities.map(([Icon, title, description, time, color]) => <div className="activity-row" key={title}><div className={`activity-icon ${color}`}><Icon /></div><div className="activity-copy"><strong>{title}</strong><span>{description}</span></div><time>{time}</time></div>)}</div></article>;
}

export default RecentActivity;
