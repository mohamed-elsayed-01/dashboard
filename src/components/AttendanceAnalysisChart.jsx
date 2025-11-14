import { useState } from "react";
import health from "../assets/charts/health.png"
import ReactECharts from "echarts-for-react";
const AttendanceAnalysisChart = () => {
    const [selected, setSelected] = useState("This week");
    const attendanceOption = {
        tooltip: { trigger: "axis" },

        grid: { left: 40, right: 10, top: 40, bottom: 40 },
        xAxis: {
            type: "category",
            data: ["Fri", "Sat", "Mon", "Tue", "Wed", "Thu"],
            axisTick: { show: false },
        },
        yAxis: {
            type: "value",
            name: "Working Hours",
            min: 0,
            max: 9,
            axisLine: { show: false },
            splitLine: { lineStyle: { color: "#eee" } },
        },
        series: [
            {
                name: "Absent",
                type: "bar",
                data: [0, 0, 0, 0, 9, 0],
                itemStyle: { color: "#E7EAE9" },
            },
            {
                name: "Today",
                type: "bar",
                data: [0, 0, 0, 0, 0, 3],
                itemStyle: { color: "#FFD1B3" },
            },
            {
                name: "Incomplete",
                type: "bar",
                data: [0, 0, 8, 0, 0, 0],
                itemStyle: { color: "#E0592A" },
            },
            {
                name: "Present",
                type: "bar",
                data: [9, 6, 0, 9, 0, 0],
                itemStyle: { color: "#28A745" },
            },


        ],
    };
    const attendanceLegend = [
        { label: "Absent", color: "#E7EAE9" },
        { label: "Today", color: "#FFD1B3" },
        { label: "Incomplete", color: "#E0592A" },
        { label: "Present", color: "#28A745" },
    ];



    return (
        <div className="chart-container">
            <div className="header">
                <div className="right-side">
                    <img src={health} alt="health" />
                    <span className="title">Attendance Analysis </span>
                </div>
                <span className="view-all">View All</span>
            </div>
            <div className="content">
                <div className="d-flex justify-content-between align-middle upper">
                    <select
                        className="selection"
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                    >
                        <option value="This week">This week</option>
                        <option value="This Month">This Month</option>
                    </select>
                    <div className="legends">
                        {
                            attendanceLegend.map((l, idx) => (
                                <div key={idx} className="le">
                                    <span style={{ backgroundColor: `${l.color}` }} className="dot" />
                                    <span className="label">{l.label}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <ReactECharts option={attendanceOption} style={{ width: "100%", height: "236px" }} />
            </div>
        </div >
    )
}

export default AttendanceAnalysisChart