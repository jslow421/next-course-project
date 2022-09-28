import {useRouter} from "next/router";
import {getEventById} from "../../../dummy-data";
import {EventItemModel} from "../../../components/events/eventList/event-list";
import {Fragment} from "react";
import EventSummary from "../../../components/event-detail/event-summary";
import EventLogistics from "../../../components/event-detail/event-logistics";
import EventContent from "../../../components/event-detail/event-content";


export default function EventPage() {
    const router = useRouter();
    const id = router.query.id;
    const event = getEventById(id);
    let eventModel = {} as EventItemModel;

    if (event?.id) {
        eventModel = {
            id: parseInt(event.id),
            title: event?.title,
            description: event?.description,
            eventLocation: event?.location,
            date: event?.date,
            image: event?.image,
            isFeatured: event?.isFeatured
        } as EventItemModel
    } else {
        return <p>No event found</p>
    }

    return (
        <Fragment>
            <EventSummary title={eventModel.title}/>
            <EventLogistics date={eventModel.date} address={eventModel.eventLocation} image={eventModel.image}
                            imageAlt={eventModel.title}/>
            <EventContent>
                <p>{eventModel.description}</p>
            </EventContent>
        </Fragment>
    );
}