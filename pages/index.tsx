import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from "next/link";
import {getAllEvents, getFeaturedEvents} from "../dummy-data";
import EventList, {EventItemModel} from "../components/events/eventList/event-list";
import EventsSearch from "../components/events/events-search";

const Home: NextPage = () => {

    const featuredEvents: any[] = getFeaturedEvents();

    const formattedEvents: EventItemModel[] = featuredEvents.map((eventData) => {
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
        <div>
            <EventList events={formattedEvents}/>
        </div>
    )
}

export default Home
