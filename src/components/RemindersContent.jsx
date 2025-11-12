import clockIcon from "../assets/icons/clock.png"
import trashIcon from "../assets/icons/trash.png"
import checkIcon from "../assets/icons/check.png"
import refreshIcon from "../assets/icons/refresh.png"
import addCircle from "../assets/icons/add-circle.png"
import { useState } from "react"
import CreateReminderModal from "./create-reminder-modal"
const RemindersContent = () => {
  const [showModal, setShowModal] = useState(false);

  const meetings = [
    {
      title: "Manager meeting",
      time: "12:00 PM",
      status: "completed",
    },
    {
      title: "Project delivery deadline",
      time: "10:30 AM",
      status: "completed",
    },
    {
      title: "Team standup meeting",
      time: "10:00 AM",
      status: "completed",
    },
    {
      title: "Odoo updates meeting",
      time: "09:00 AM",
      status: "cancelled",
    },
    {
      title: "Odoo updates meeting",
      time: "09:00 AM",
      status: "cancelled",
    },
  ];

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className='reminder-container'>
        <div className="meetings">
          {
            meetings.map((m, index) => {
              const isCanceleed = m.status === "cancelled";
              const isLast = index === meetings.length - 1;

              return (
                <>
                  <div className="meeting-item">
                    <div className="left-side">
                      <span className={`title ${isCanceleed ? "line-through" : ""}`}>
                        {m.title}
                      </span>
                      <span className="time">
                        <img src={clockIcon} alt="clockicon" />
                        {m.time}
                      </span>
                    </div>
                    <div className="right-side">

                      {isCanceleed ? <img src={refreshIcon} alt="refresh" /> : <img src={checkIcon} alt="check" />}
                      <img src={trashIcon} alt="check" />
                    </div>
                  </div>
                  {!isLast && <div className="line" />}
                </>

              )
            })
          }
        </div>
        <button onClick={() => setShowModal(true)} className="create-reminder">
          <img src={addCircle} alt="add-circle" />
          <span>Create a reminder</span>
        </button>
      </div>
      <CreateReminderModal show={showModal} onClose={handleClose} />

    </>
  )
}

export default RemindersContent