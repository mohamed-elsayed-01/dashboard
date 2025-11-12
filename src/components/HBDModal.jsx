import { Modal, Button } from "react-bootstrap";
import gift from "../assets/icons/gift.png"
export default function HBDModal({ show, onClose, person }) {
    if (!person) return null;
    return (
        <Modal className="HBD-modal-container" show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <div className="head">
                    <img src={gift} alt="gift" className="gift-icon" />
                    <span>
                        Send Birthday Wishes
                    </span>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="left-side">
                    <div className="img-container">
                        {person.src && <img src={person.src} alt={person.name} className="" />}
                    </div>
                    <div className="info">
                        <span className="name">{person.name}</span>
                        <span className="job">{person.position}</span>
                    </div>
                </div>
                <div className="hbd-message">
                    <span>Your Message</span>
                    <textarea placeholder="Make their day brighter with a quick birthday message..">

                    </textarea>
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
    );
}
