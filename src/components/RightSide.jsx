import { Announcements } from "./Announcements"
import AttendanceAnalysisChart from "./AttendanceAnalysisChart"
import LeavesChart from "./LeavesChart"
import QuickAccess from "./QuickAccess"
import Quote from "./Quote"
import Stats from "./Stats"
import UpcomingEvents from "./UpcomingEvents"

const RightSide = () => {
    return (
        <div className="right-side">
            <div className="first-row">
                <Stats />
            </div>
            <div className="second-row">
                <Announcements />
                <QuickAccess />
            </div>
            <div className="third-row">
                <Quote />
                <UpcomingEvents />
            </div>
            <div className="fourth-row">
                <LeavesChart />
                <AttendanceAnalysisChart />
            </div>
        </div>
    )
}

export default RightSide