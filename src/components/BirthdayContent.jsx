import { useState } from "react";
import personImg from "../assets/imgs/person.jpg"
import HBDModal from "./HBDModal";


const BirthdayContent = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);

    const handleOpen = (person) => {
        setSelectedPerson(person);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedPerson(null);
    };

    const birthdays = [
        {
            name: "Abdallah Asaad Issa",
            position: "Multimedia Designer",
            src: personImg,
        },
        {
            name: "Lami Monir Hatim",
            position: "Property Consultant",
            src: personImg,
        },
        {
            name: "Ahlam Al Saleh",
            position: "Sales Manager (LREB)",
            src: personImg,
        },
        {
            name: "Odai Ashraf",
            position: "Real Estate Agent",
            src: personImg,
        },
        {
            name: "Katarzyna Weronika",
            position: "Property Consultant",
            src: personImg,
        },
         {
            name: "Katarzyna Weronika",
            position: "Property Consultant",
            src: personImg,
        },
    ];

    return (
        <>
            <div className="tab-body-container">
                {
                    birthdays.map((p, index) => {
                        const isLast = index === birthdays.length - 1;
                        return (
                            <>
                                <div className="birthday-item">
                                    <div className="left-side">
                                        <div className="img-container">
                                            {p.src && <img src={p.src} alt={p.name} className="" />}
                                        </div>
                                        <div className="info">
                                            <span className="name">{p.name}</span>
                                            <span className="job">{p.position}</span>
                                        </div>
                                    </div>
                                    <span onClick={() => handleOpen(p)} className="say-hbd-btn">Say HBD!</span>
                                </div>
                                {!isLast && <div className="line" />}
                            </>
                        )
                    })
                }
            </div>
            <HBDModal show={showModal} onClose={handleClose} person={selectedPerson} />
        </>
    )
};

export default BirthdayContent;