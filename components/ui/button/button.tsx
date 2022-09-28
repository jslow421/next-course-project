import Link from "next/link";
import style from "./button.module.scss";
import React from "react";

export default function Button(props: {link?: string, onClick?: React.MouseEventHandler, children: React.ReactNode  }) {
    if (props.link) {
        return (
            <Link href={props.link}>
                <a className={style.btn}>{props.children}</a>
            </Link>
        );
    }

    return (
        <button className={style.btn} onClick={props.onClick}>{props.children}</button>
    );
}