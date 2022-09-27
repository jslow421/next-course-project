import {EventItemModel} from "./event-list";
import Link from "next/link";
import style from "./event-item.module.scss";

export default function EventItem(props: EventItemModel) {

    const humanReadableDate = new Date(props.date).toLocaleDateString("en-us", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const formattedAddress = props.eventLocation.replace(', ', '\n');
    const exploreLink = `/events/${props.id}`;

    return (
        <li className={style.item}>
            <img src={"/" + props.image} alt={props.title} height="100px" width="100px"/>
            <div className={style.content}>
                <div>
                    <h2>{props.title}</h2>
                </div>
                <div className={style.date}>
                    <time>{humanReadableDate}</time>
                </div>
                <div className={style.address}>
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={style.actions}>
                <Link href={exploreLink}>Explore Event</Link>
            </div>
        </li>
    );
}