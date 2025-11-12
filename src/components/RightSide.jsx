import { Announcements } from "./Announcements"
import QuickAccess from "./QuickAccess"
import Stats from "./Stats"

const RightSide = () => {
    return (
        <div className="right-side">
            <Stats />
            <div className="second-row">
                <Announcements />
                <QuickAccess />
            </div>
            <div className="third-row">
                
            </div>
        </div>
    )
}

export default RightSide