import { Modal, Button } from "react-bootstrap";
import notification from "../assets/icons/notification.png"


const CreateReminderModal = ({ show, onClose }) => {

    return (
        <Modal className="create-reminder-container" show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <div className="reminder-head">
                    <img src={notification} alt="notification" />
                    <span className="d-block reminder-title-head">
                        Create a reminder
                    </span>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex inputs-container">
                    <div className="input-style">
                        <label htmlFor="date">
                            Select Date
                        </label>
                        <input id="date" placeholder="Jan 6, 2024" type="text" />
                    </div>
                    <div className="input-style">
                        <label htmlFor="time">
                            Select Time
                        </label>
                        <input id="time" placeholder="11:30" type="text" />
                    </div>
                    <div className="input-style">
                        <label htmlFor="Reminder-Title">
                            Reminder Title
                        </label>
                        <input id="Reminder-Title" placeholder="Reminder me to.." type="text" />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="create-reminder-footer">
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

export default CreateReminderModal