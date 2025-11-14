import logout from "../assets/charts/logout.png"
import ReactECharts from "echarts-for-react";
const LeavesChart = () => {

    const leavesOption = {
        series: [
            {
                type: "gauge",
                startAngle: 180,
                endAngle: 0,
                radius: "180%",
                min: 0,
                center: ["50%", "93%"],
                max: 21,
                progress: {
                    show: true,
                    width: 20,
                    itemStyle: {
                        color: "#E0592A",
                        shadowBlur: 0,
                    },
                },
                axisLine: {
                    lineStyle: {
                        width: 20,
                        color: [[1, "#E7EAE9"]],
                        shadowBlur: 0,
                    },
                },
                axisTick: { show: false },
                splitLine: { show: false },
                axisLabel: { show: false },
                pointer: { show: false },
                anchor: { show: false },
                detail: {
                    show: true,
                    offsetCenter: [0, "-10%"],
                    fontSize: 14,
                    color: "#272963",
                    fontWeight: "500",
                    formatter: () => `14\nOut of 21`,
                    lineHeight: 18,
                },
                data: [{ value: 14 }],
            },
        ],
    };

    return (
        <div className="chart-container">
            <div className="header">
                <div className="right-side">
                    <img src={logout} alt="logout" />
                    <span className="title">Leaves</span>
                </div>
                <span className="view-all">View All</span>
            </div>
            <div className="content">
                <ReactECharts option={leavesOption} style={{ height: 100 }} />
                <div className="analysis">
                    <div className="line" />
                    <div className="analysis-row">
                        <span className="date">14 May, 2024</span>
                        <span className="title">Annual</span>
                    </div>
                    <div className="line" />
                    <div className="analysis-row">
                        <span className="date">14 May, 2024</span>
                        <span className="title">Annual</span>
                    </div>
                    <div className="line" />
                    <div className="analysis-row">
                        <span className="date">14 May, 2024</span>
                        <span className="title">Annual</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeavesChart