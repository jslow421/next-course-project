import Link from "next/link";
import styles from "./main-header.module.scss";

export default function MainHeader(/*props: {children: React.ReactNode}*/) {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">NextEvents</Link>
            </div>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <Link href="/events">Browse All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}