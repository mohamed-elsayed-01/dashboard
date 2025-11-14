import { useState } from "react";
import CalendarCard from "./CalendarApp"
import Tabs from "./Tabs"
import calender from "../assets/imgs/calendar.png"
const LeftSide = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button className="toggle-left-btn" onClick={() => setOpen(!open)}>
                <img src={calender} alt="calender" />
            </button>
            <div className={`left-side-container ${open ? "open" : ""}`}>
                <CalendarCard />
                <Tabs />
            </div>
        </>
    )
}

export default LeftSide