import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy-data";
import EventList, {EventItemModel} from "../../components/events/eventList/event-list";
import ResultsTitle from "../../components/results-title/results-title";
import { Fragment } from "react";
import Button from "../../components/ui/button/button";
import ErrorAlert from "../../components/ui/error-alert/error-alert";

export default function FilteredEventPage() {
    const router = useRouter();
    const filteredData = router.query.slug;

    // Return this when the component is rendered initially on load - don't give an error
    if (!filteredData) {
        return <p className="center">Loading...</p>
    }

    const year = Number(filteredData[0]);
    const month = Number(filteredData[1]);
    const date = new Date(year, month - 1);

    if (isNaN(year) || isNaN(month) || 2021 > year || year > new Date().getFullYear() || month <= 0 || month > 12) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>Invalid Filter</p>
                    <div className="center">
                        <Button link="/events">Show All Events</Button>
                    </div>
                </ErrorAlert>
            </Fragment>
        );
    }

    const filteredEvents: any[] = getFilteredEvents({
        year: year,
        month: month
    });

    if (!filteredEvents || filteredEvents.length <= 0) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>No events found for filter</p>
                    <div className="center">
                        <Button link="/events">Show All Events</Button>
                    </div>
                </ErrorAlert>
            </Fragment>
        );
    }

    const formattedEvents: EventItemModel[] = filteredEvents.map((eventData) => {
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

    return (
        <Fragment>
            <h1>Filtered Events Slug Page {year} {month}</h1>
            <ResultsTitle date={date}></ResultsTitle>
            <EventList events={formattedEvents}/>
        </Fragment>
    );
}