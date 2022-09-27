import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from "next/link";

const Home: NextPage = () => {
  return (
      <div>
        <h1>Home Page</h1>
          <ul>
              <li>
                  <Link href="/events">Events</Link>
              </li>
          </ul>
      </div>
  )
}

export default Home
