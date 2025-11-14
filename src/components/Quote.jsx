import subtract from "../assets/Subtract.png"
import decoration from "../assets/imgs/quote-decoration.png"
const Quote = () => {
    return (
        <div className="quote-card-conteiner">
            <div className="quote-card">
                <div className="quote-first-row">
                    <span className="title">
                        Quote of the day
                    </span>
                    <span className="quote">
                        “The way to get started is to quit talking and begin doing.”
                    </span>
                </div>
                <div className="quote-second-row">
                    <span>
                        – Walt Disney
                    </span>
                </div>
            </div>
            <img src={subtract} alt="subtract" className="subtract" />
            <img src={decoration} alt="decoration" className="decoration" />
        </div>
    )
};

export default Quote;