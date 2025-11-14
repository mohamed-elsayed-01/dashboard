import event1 from "../assets/events/event-1.png"
import event2 from "../assets/events/event-2.png"
import event3 from "../assets/events/event-3.png"
import calender from "../assets/events/calendar-2.png"
import arrowRight from "../assets/events/arrow-right.png"
import arrowLeft from "../assets/events/arrow-left.png"
import arrowRight2 from "../assets/events/arrow-right2.png"
import location from "../assets/events/location.png"
const UpcomingEvents = () => {

    const events = [
        {
            tag: "New",
            date: "11 Oct",
            title: "The United Property",
            location: "Istanbul, Turkey",
            src: event1
        },
        {
            date: "13 Nov",
            title: "Second Home Expo",
            location: "Amsterdam, Netherlands",
            src: event2
        },
        {
            date: "26 Dec",
            title: "Second Home Expo",
            location: "St. Regis, Abu Dhabi",
            src: event3
        },
        {
            date: "13 Nov",
            title: "Second Home Expo",
            location: "Amsterdam, Netherlands",
            src: event2
        },
        {
            date: "26 Dec",
            title: "Second Home Expo",
            location: "St. Regis, Abu Dhabi",
            src: event3
        },
        {
            date: "13 Nov",
            title: "Second Home Expo",
            location: "Amsterdam, Netherlands",
            src: event2
        },
        {
            date: "26 Dec",
            title: "Second Home Expo",
            location: "St. Regis, Abu Dhabi",
            src: event3
        },
        {
            date: "26 Dec",
            title: "Second Home Expo",
            location: "St. Regis, Abu Dhabi",
            src: event3
        },
        {
            date: "13 Nov",
            title: "Second Home Expo",
            location: "Amsterdam, Netherlands",
            src: event2
        },
        {
            date: "26 Dec",
            title: "Second Home Expo",
            location: "St. Regis, Abu Dhabi",
            src: event3
        }
    ];

    return (
        <div className="up-coming-container">
            <div className="header">
                <div className="header-right-side">
                    <img src={calender} alt="calneder" />
                    <span>Upcoming Events</span>
                </div>
                <div className="header-left-side">
                    <div className="arrow-container">
                        <img src={arrowLeft} alt="arrowLeft" />
                    </div>
                    <div className="arrow-container">
                        <img src={arrowRight} alt="arrowRight" />
                    </div>
                </div>
            </div>
            <div className="up-coming-events-cards">
                {
                    events.map((e, idx) => {
                        return (
                            <div key={idx} style={{
                                backgroundImage: `url(${e.src})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            }} className="up-coming-card">
                                <div className="upc-gradiant" />
                                <div className="content">
                                    <div className="up-part">
                                        {e.tag && <span className="tag">
                                            {e.tag}
                                        </span>}
                                        <span className="date">
                                            {e.date}
                                        </span>
                                    </div>
                                    <div className="bottom-part">
                                        <div className="up-side">
                                            <span className="content-title">
                                                {e.title}
                                            </span>
                                            <img src={arrowRight2} alt="arrowRight2" />
                                        </div>
                                        <div className="down-side">
                                            <img src={location} alt="location" />
                                            <span className="d-block">
                                                {e.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UpcomingEvents