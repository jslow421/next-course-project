import EventItem from "./event-item";
import style from "./event-list.module.scss";

export interface EventItemModel {
    id: number;
    title: string;
    description: string;
    eventLocation: string;
    date: string;
    image: string;
    isFeatured: boolean;
}

export default function EventList(props: { events: EventItemModel[] }) {
    const renderedEvents: any = [];

    props.events.map((event) => {
        renderedEvents.push(
            <EventItem key={event.id}
                       id={event.id}
                       date={event.date}
                       image={event.image}
                       isFeatured={event.isFeatured}
                       eventLocation={event.eventLocation}
                       title={event.title}
                       description={event.description}/>
        );
    });

    return (
        <ul className={style.list}>{renderedEvents}</ul>
    );
}