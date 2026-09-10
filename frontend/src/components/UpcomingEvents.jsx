import { FiArrowRight, FiMapPin } from "react-icons/fi";
import CalendarWidget from "./CalendarWidget";

const events = [["12", "SEP", "Parent-teacher meeting", "Main auditorium", "02:30 PM"], ["15", "SEP", "Annual sports day", "School playground", "09:00 AM"], ["22", "SEP", "Science exhibition", "Innovation lab", "10:30 AM"]];

function UpcomingEvents() { return <article className="panel events-panel"><div className="section-heading"><div><h2>Upcoming events</h2><p>What is happening next</p></div><button className="link-button" type="button">Calendar <FiArrowRight /></button></div><CalendarWidget /><div className="event-list">{events.map(([date, month, title, location, time]) => <div className="event-row" key={title}><div className="event-date"><strong>{date}</strong><span>{month}</span></div><div className="event-details"><strong>{title}</strong><span><FiMapPin /> {location}</span></div><time>{time}</time></div>)}</div></article>; }

export default UpcomingEvents;
