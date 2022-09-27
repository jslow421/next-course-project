import {EventItemModel} from "./event-list";
import Link from "next/link";

export default function EventItem(props: EventItemModel) {

    const humanReadableDate = new Date(props.date).toLocaleDateString("en-us", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const formattedAddress = props.eventLocation.replace(',', '\n');
    const exploreLink = `/events/${props.id}`;

    return (
        <li>
            <img src={"/" + props.image} alt={props.title} height="100px" width="100px"/>
            <div>
                <div>
                    <h2>{props.title}</h2>
                </div>
                <div>
                    <time>{humanReadableDate}</time>
                </div>
                <div>
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div>
                <Link href={exploreLink}>Explore Event</Link>
            </div>
        </li>
    );
}