function CalendarWidget() {
	const days = ["", "", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"];
	return <div className="mini-calendar"><div className="calendar-top"><button type="button" aria-label="Previous month">‹</button><strong>September 2026</strong><button type="button" aria-label="Next month">›</button></div><div className="calendar-week">{["S", "M", "T", "W", "T", "F", "S"].map((day, index) => <span key={`${day}-${index}`}>{day}</span>)}</div><div className="calendar-days">{days.map((day, index) => <span className={day === "9" ? "today" : ["12", "15", "22"].includes(day) ? "has-event" : ""} key={`${day}-${index}`}>{day}</span>)}</div></div>;
}
export default CalendarWidget;
