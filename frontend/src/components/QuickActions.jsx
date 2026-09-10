import { FiCalendar, FiFilePlus, FiUserPlus, FiUsers } from "react-icons/fi";

const actions = [[FiUserPlus, "Add Student"], [FiUsers, "Add Teacher"], [FiFilePlus, "Add Notice"], [FiCalendar, "Add Event"]];
function QuickActions() { return <section className="quick-actions"><div><h2>Quick actions</h2><p>Common tasks, one click away</p></div><div className="action-buttons">{actions.map(([Icon, label]) => <button type="button" key={label}><Icon />{label}</button>)}</div></section>; }
export default QuickActions;
