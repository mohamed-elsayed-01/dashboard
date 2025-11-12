import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../Calendar.css";
import calenderIcon from "../assets/icons/calendar.png";
import ScheduleModal from "./ScheduleModal";

const events = [
  { title: "New Y..", date: "2025-07-01", color: "#d63384" },
  { title: "Intern..", date: "2025-07-04", color: "#20c997" },
  { title: "Break..", date: "2025-07-04", color: "#845ef7" },
  { title: "The U..", date: "2025-07-09", color: "#82c91e" },
  { title: "Missi..", date: "2025-07-21", color: "#51cf66" },
  { title: "Camp..", date: "2025-07-24", color: "#74c0fc" },
  { title: "Oper..", date: "2025-07-30", color: "#a9e34b" },
  { title: "Initiati..", date: "2025-07-31", color: "#9775fa" },
];

export default function CalendarCard() {
  const [view, setView] = useState("month");
  const [selectedMonth, setSelectedMonth] = useState(6);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentYear, setCurrentYear] = useState(2025);
  const [showModal, setShowModal] = useState(false);
  const [dayEvents, setDayEvents] = useState([]);

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    const clickedEvents = events.filter((e) => e.date === info.dateStr);
    setDayEvents(clickedEvents);
    setShowModal(true);
  };

  useEffect(() => {
    document.querySelectorAll(".fc-day.selected-day").forEach((el) =>
      el.classList.remove("selected-day")
    );
    if (selectedDate) {
      const dayEl = document.querySelector(`[data-date="${selectedDate}"]`);
      if (dayEl) dayEl.classList.add("selected-day");
    }
  }, [selectedDate]);

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  return (
    <>
      <div className="calendar-wrapper">
        <div className="calendar-top">
          <div className="calendar-title">
            <img src={calenderIcon} alt="claender-icon" />
            Calendar
          </div>

          <select value={view} onChange={(e) => setView(e.target.value)}>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </div>

        {view === "year" && (
          <div className="year-view">
            <div className="year-header">
              <button onClick={() => setCurrentYear((prev) => prev - 1)}>‹</button>
              <span>{currentYear}</span>
              <button onClick={() => setCurrentYear((prev) => prev + 1)}>›</button>
            </div>
            <div className="months-grid">
              {months.map((m, i) => (
                <div
                  key={m}
                  className={`month-cell ${i === selectedMonth ? "selected-month" : ""}`}
                  onClick={() => setSelectedMonth(i)}
                >
                  <span className="month-name">{m}</span>
                  <span className="month-num">{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === "month" && selectedMonth !== null && (
          <FullCalendar
            key={selectedMonth}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            initialDate={new Date(currentYear, selectedMonth, 1)}
            headerToolbar={{
              left: "prev",
              center: "title",
              right: "next",
            }}
            titleFormat={{ month: "long", year: "numeric" }}
            events={events}
            height="auto"
            fixedWeekCount={false}
            dateClick={handleDateClick}
            dayMaxEvents={2}
            eventDisplay="block"
          />
        )}
      </div>

      <ScheduleModal
        show={showModal}
        onClose={() => setShowModal(false)}
        selectedDate={selectedDate}
        dayEvents={dayEvents}
      />
    </>
  );
}
