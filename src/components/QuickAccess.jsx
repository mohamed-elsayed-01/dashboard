import flash from "../assets/cards/flash.png"
import edit from "../assets/cards/edit-2.png"
import clock from "../assets/cards/clock.png"
import timer from "../assets/cards/timer.png"
import note from "../assets/cards/note.png"
import lifebuoy from "../assets/cards/lifebuoy.png"
import arrowRight from "../assets/icons/arrow-right.png"
import { useState } from "react"
import QuickAccessModal from "./QuickAccessModal"

const QuickAccess = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };

    const data = [
        {
            id: 1,
            title: "Attendance",
            description: "Log or view your daily check-ins and working hours.",
            src: clock
        },
        {
            id: 2,
            title: "Leaves",
            description: "Request time off or check your leave balance.",
            src: timer
        },
        {
            id: 3,
            title: "To-do",
            description: "Manage your personal tasks and work reminders.",
            src: note
        },
        {
            id: 4,
            title: "Maintenance",
            description: "Report or track issues with office equipment or facilities.",
            src: lifebuoy
        }
    ]

    return (
        <>
            <div className="big-card-container">
                <div className="first-row">
                    <div className="right-side">
                        <img src={flash} alt="lamb" />
                        <span>Quick Access</span>
                    </div>
                    <span onClick={() => setShowModal(true)} className="view-all">
                        <img src={edit} alt="edit" />
                        Edit
                    </span>
                </div>
                <div className="big-card-second-row">
                    {
                        data.map((a, index) => {
                            const isLast = index === data.length - 1;
                            return (
                                <>
                                    <div key={index} className="item">
                                        <div className="right-side">
                                            <span className="num">
                                                <img src={a.src} alt={a.title} />
                                            </span>
                                            <div className="titles">
                                                <span className="title">
                                                    {a.title}
                                                </span>
                                                <span className="desc">
                                                    {a.description}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="left-side">
                                            <img src={arrowRight} alt="arrow-right" width={20} height={20} />
                                        </div>
                                    </div>
                                    {!isLast && <div className="line" />}
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <QuickAccessModal show={showModal} onClose={handleClose} />
        </>
    )
}

export default QuickAccess