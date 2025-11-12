import clockIcon from "../assets/icons/clock.png"
import locationIcon from "../assets/icons/location.png"
import arrowRight from "../assets/icons/arrow-right-gray.png"
const EventsContent = () => {

  const events = [
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
  ]

  return (
    <div className="tab-body-container">
      {
        events.map((e, index) => {
          const isLast = (index + 1) === events.length;
          return (
            <>
              <div key={index} className="event-item">
                <div className="left-side">
                  <span>{e.title}</span>
                  <div className="time-place">
                    <span className="first">
                      <img src={clockIcon} alt="clock" />
                      {e.time}
                    </span>
                    <span>
                      <img src={locationIcon} alt="lcoation" />
                      {e.location}
                    </span>
                  </div>
                </div>
                <img src={arrowRight} alt="arrowRight" />
              </div>
              {!isLast && <div className="line" />}
            </>
          )
        })
      }
    </div>
  )
}

export default EventsContent