import Link from "next/link";
import EventList, {EventItemModel} from "../../components/events/eventList/event-list";
import {getAllEvents, getFeaturedEvents} from "../../dummy-data";
import EventsSearch from "../../components/events/events-search";
import {Fragment} from "react";
import {useRouter} from "next/router";

export default function EventsListPage() {
    const allEvents: any[] = getAllEvents();
    const router = useRouter();

    const formattedEvents: EventItemModel[] = allEvents.map((eventData) => {
        return {
            id: eventData.id,
            title: eventData.title,
            description: eventData.description,
            eventLocation:eventData.location,
            date: eventData.date,
            image: eventData.image,
            isFeatured: eventData.isFeatured
        } as EventItemModel;
    });

    function findEventsHandler(year: string | undefined, month:string | undefined) {
        router.push(`/events/${year}/${month}`);
    }

    return (
        <Fragment>
            <h1>All Events list page</h1>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList events={formattedEvents} />
        </Fragment>
    );
}