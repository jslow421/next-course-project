import Link from "next/link";

export default function EventsListPage() {
    return (
        <div>
            <h1>Events list page</h1>
            <ul>
                <li>
                    <Link href="/events/1">Event 1</Link>
                </li>
            </ul>
        </div>
    );
}