function renderEventContent(eventInfo) {
    const { bgColor, textColor } = eventInfo.event.extendedProps;

    console.log(bgColor, textColor);


    return (
        <div
            style={{
                backgroundColor: bgColor,
                color: textColor,
                padding: "2px 2px",
                borderRadius: "2px",
                fontSize: "10px",
                fontWeight: "400",
                textAlign: "center",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                lineHeight: "18px",
            }}
        >
            {eventInfo.event.title}
        </div>
    );
}

export default renderEventContent