import lamp from "../assets/cards/lamp-on.png"
import arrowRight from "../assets/icons/arrow-right.png"
export const Announcements = () => {

    const data = [
        {
            id: 1,
            title: "Eid Al-Adha Holiday Schedule",
            description: "The company will be closed from June 28 to July 1 for...",
            isNew: true
        },
        {
            id: 2,
            title: "New Remote Work Policy Update",
            description: "Starting August 1st, employees may apply for up to..."
        },
        {
            id: 3,
            title: "Monthly Town Hall – July 25th",
            description: "Join us for company updates, team shoutouts, and a..."
        },
        {
            id: 4,
            title: "Mid-Year Performance Reviews Begin",
            description: "Managers will begin review cycles this week. Please..."
        }
    ]


    return (
        <div className="big-card-container">
            <div className="first-row">
                <div className="right-side">
                    <img src={lamp} alt="lamb" />
                    <span>Announcements</span>
                </div>
                <span className="view-all">View All</span>
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
                                            {a.id}
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
    )
}
