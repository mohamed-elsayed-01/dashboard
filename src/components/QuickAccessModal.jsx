import { Modal, Button } from "react-bootstrap";
import quickAcessIcon from "../assets/quick-access/edit-2.png"
import clock from "../assets/quick-access/clock.png"
import timer from "../assets/quick-access/timer.png"
import note from "../assets/quick-access/note.png"
import lifebuoy from "../assets/quick-access/lifebuoy.png"
import calender from "../assets/quick-access/calendar-2.png"
import document from "../assets/quick-access/document.png"
import minus from "../assets/quick-access/minus.png"
import dragger from "../assets/quick-access/drag_indicator.png"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const initialYourTools = [
    { id: 1, src: clock, title: "Attendance", description: "Log or view your daily check-ins and working hours." },
    { id: 2, src: timer, title: "Leaves", description: "Request time off or check your leave balance." },
    { id: 3, src: note, title: "To-do", description: "Manage your personal tasks and work reminders." },
    { id: 4, src: lifebuoy, title: "Maintenance", description: "Report or track issues with office equipment or facilities." },
];

const initialShortcuts = [
    { id: 5, src: calender, title: "Timesheets", description: "Track and manage your working hours." },
    { id: 6, src: note, title: "Project & Tasks", description: "View and update your assignments." },
    { id: 7, src: document, title: "Document Hub", description: "Access and store work-related files." },
];

const QuickAccessModal = ({ show, onClose }) => {
    const [yourTools, setYourTools] = useState(initialYourTools);
    const [shortcuts, setShortcuts] = useState(initialShortcuts);

    const moveToYourTools = (tool) => {
        setYourTools([...yourTools, tool]);
        setShortcuts(shortcuts.filter((t) => t.id !== tool.id));
    };

    const moveToShortcuts = (tool) => {
        setShortcuts([...shortcuts, tool]);
        setYourTools(yourTools.filter((t) => t.id !== tool.id));
    };

    return (
        <Modal className="quick-aceess-modal-content" show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <div className="header">
                    <img src={quickAcessIcon} alt="quickAcessIcon" />
                    <span>Edit quick access</span>
                </div>
            </Modal.Header>
            <div className="draggers">
                <img src={dragger} alt="dragger" />
                <img src={dragger} alt="dragger" />
                <img src={dragger} alt="dragger" />
                <img src={dragger} alt="dragger" />
            </div>
            <Modal.Body>
                <div className="quick-aceess-modal-section">
                    <span className="title">Your Tools</span>
                    <div className="items-container">
                        {
                            yourTools.map((t, index) => {
                                const isLast = index === yourTools.length - 1;

                                return (
                                    <div key={index} className="item-container">
                                        <div className="item">
                                            <div className="right-side">
                                                <div className="icon">
                                                    <img src={t.src} alt={t.title} />
                                                </div>
                                                <div className="info">
                                                    <span className="title">{t.title}</span>
                                                    <span className="desc">{t.description}</span>
                                                </div>
                                            </div>
                                            <div onClick={() => moveToShortcuts(t)} className="left-side">
                                                <img src={minus} alt={t.id} />
                                            </div>
                                        </div>
                                        {!isLast && <div className="line" />}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="quick-aceess-modal-section">
                    <span className="title">Additional Shortcuts</span>
                    <div className="items-container">
                        {
                            shortcuts.map((t, index) => {
                                const isLast = index === shortcuts.length - 1;

                                return (
                                    <div key={index} className="item-container">
                                        <div className="item">
                                            <div className="right-side">
                                                <div className="icon">
                                                    <img src={t.src} alt={t.title} />
                                                </div>
                                                <div className="info">
                                                    <span className="title">{t.title}</span>
                                                    <span className="desc">{t.description}</span>
                                                </div>
                                            </div>
                                            <div onClick={() => moveToYourTools(t)} className="left-side">
                                                <FontAwesomeIcon color="#E0592A" icon={faPlus} />
                                            </div>
                                        </div>
                                        {!isLast && <div className="line" />}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn-secondary " onClick={onClose}>
                    Cancel
                </Button>
                <Button className="btn-danger" onClick={onClose}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default QuickAccessModal