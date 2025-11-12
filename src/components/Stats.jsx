import document from "../assets/stats/document-text.png"
import edit from "../assets/stats/message-edit.png"
import receipt from "../assets/stats/receipt.png"
import logout from "../assets/stats/logout.png"
import arrowRight from "../assets/stats/arrow-right.png"
const Stats = () => {

    const dashboardStats = [
        { number: 14, title: "Leaves Balance", src: logout },
        { number: 4, title: "Pending Requests", src: edit },
        { number: 9, title: "Payslips", src: receipt },
        { number: 4, title: "My Docs", src: document },
    ];

    return (
        <div className="stats-container">
            {
                dashboardStats.map((d, index) => {

                    return (
                        <div key={index} className="stat-card">
                            <div className="info">
                                <div className="icon">
                                    <img src={d.src} alt={d.title} />
                                </div>
                                <div className="nums">
                                    <span className="total">
                                        {d.number}
                                    </span>
                                    <span className="title">
                                        {d.title}
                                    </span>
                                </div>
                            </div>
                            <div className="stats-button">
                                <span className="see-details">
                                    See details
                                </span>
                                <img src={arrowRight} alt="arrow" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Stats