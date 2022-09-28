import {EventItemModel} from "./event-list";
import style from "./event-item.module.scss";
import Button from "../../ui/button";
import DateIcon from "../../icons/date-icon";
import AddressIcon from "../../icons/address-icon";
import ArrowRightIcon from "../../icons/arrow-right-icon";

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
                    <DateIcon/>
                    <time>{humanReadableDate}</time>
                </div>
                <div className={style.address}>
                    <AddressIcon/>
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={style.actions}>
                <Button link={exploreLink}>
                    <span>Explore Event</span>
                    <span><ArrowRightIcon/></span>
                </Button>
            </div>
        </li>
    );
}