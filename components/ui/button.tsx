import Link from "next/link";
import style from "./button.module.scss";
import React from "react";

export default function Button(props: {link: string, children: React.ReactNode  }) {
    return (
        <Link href={props.link}>
            <a className={style.btn}>{props.children}</a>
        </Link>
    );
}