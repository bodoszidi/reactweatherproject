
export default function FormatedDate(props) {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const day = days[props.date.getDay()];
    const hours = props.date.getHours().toString().padStart(2, "0");
    const minutes = props.date.getMinutes().toString().padStart(2, "0");

    return (
        <>
            {day} {hours}:{minutes}
        </>
    );
}