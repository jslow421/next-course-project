import Link from "next/link";
import style from "./button.module.scss";

export default function Button(props: {link: string, children: JSX.Element[]}) {
    return (
        <Link href={props.link}>
            <a className={style.btn}>{props.children}</a>
        </Link>
    );
}