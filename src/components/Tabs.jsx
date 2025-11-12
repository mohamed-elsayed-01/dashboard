
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faCalendar, faBell } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import "../Tabs.css"
import BirthdayContent from './BirthdayContent';
import EventsContent from './EventsContent';
import RemindersContent from './RemindersContent';
const Tabs = () => {
    const [activeTab, setActiveTab] = useState("Birthdays");
    const tabs = [
        { name: "Birthdays", icon: <FontAwesomeIcon icon={faGift} /> },
        { name: "Events", icon: <FontAwesomeIcon icon={faCalendar} /> },
        { name: "Reminders", icon: <FontAwesomeIcon icon={faBell} /> },
    ];

    return (
        <div className="tab-context">
            <div className="tabs-container">
                {tabs.map((tab) => (
                    <button key={tab.name} className={`tab-item ${activeTab === tab.name ? "active" : ""}`} onClick={() => setActiveTab(tab.name)}>
                        {tab.icon}
                        <span>{tab.name}</span>
                    </button>
                ))}
            </div>
            {activeTab === "Birthdays" && <BirthdayContent />}
            {activeTab === "Events" && <EventsContent />}
            {activeTab === "Reminders" && <RemindersContent />}
        </div>

    )
}

export default Tabs