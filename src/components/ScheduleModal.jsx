import { Modal, Button } from "react-bootstrap";
import calenderIcon from "../assets/icons/calendar.png"
import clockIcon from "../assets/icons/clock.png"
import locationIcon from "../assets/icons/location.png"
import arrowRight from "../assets/icons/arrow-right.png"
import check from "../assets/icons/check.png"
import trash from "../assets/icons/trash.png"

export const scheduleData = {
    events: [
        {
            title: "International Real Estate and Investment",
            time: "09:00 AM",
            location: "ADNEC Centre Abu Dhabi",
        },
        {
            title: "Breakpoint 2025",
            time: "12:00 PM",
            location: "Etihad Arena, Abu Dhabi",
        },
    ],
    reminders: [
        {
            title: "Team standup meeting",
            time: "10:00 AM",
        },
        {
            title: "Manager meeting",
            time: "12:00 PM",
        },
    ],
};



export default function ScheduleModal({ show, onClose, selectedDate }) {
    if (!selectedDate) return null;

    const formattedDate = new Date(selectedDate).toLocaleDateString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
    });




    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton className="">
                <Modal.Title>
                    <div className="schedule-modal-header">
                        <img alt="calendar" src={calenderIcon} />
                        <span>Schedule</span>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h1>
                    {formattedDate}
                </h1>
                <div className="inner">
                    <div>
                        <span className="heading">
                            events
                        </span>
                        <div className="modal-sub-body">
                            {scheduleData.events.map((item, index) => {
                                const isLast = index + 1 === scheduleData.events.length;
                                return (
                                    <>
                                        <div key={index} className="item">
                                            <div>
                                                <span className="head">
                                                    {item.title}
                                                </span>
                                                <span className="desc">
                                                    <span className="d-flex align-items-center gap-1">
                                                        <img src={clockIcon} alt="icon" />
                                                        {item.time}
                                                    </span>
                                                    <span className="d-flex align-items-center gap-1">
                                                        <img src={locationIcon} alt="icon" />
                                                        {item.location}
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="">
                                                <img src={arrowRight} alt="icon" />
                                            </div>
                                        </div>
                                        {!isLast && <div className="line" />}
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <span className="heading">
                            reminders
                        </span>
                        <div className="modal-sub-body">
                            {scheduleData.reminders.map((item, index) => {
                                const isLast = index + 1 === scheduleData.reminders.length;
                                return (
                                    <>
                                        <div key={index} className="item">
                                            <div>
                                                <span className="head">
                                                    {item.title}
                                                </span>
                                                <span className="desc">
                                                    <span className="d-flex align-items-center gap-1">
                                                        <img src={clockIcon} alt="icon" />
                                                        {item.time}
                                                    </span>

                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={check} alt="icon" />
                                                <img src={trash} alt="icon" />
                                            </div>
                                        </div>
                                        {!isLast && <div className="line" />}
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={onClose}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
