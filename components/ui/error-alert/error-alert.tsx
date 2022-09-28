import classes from './error-alert.module.scss';
import React from "react";

export default function ErrorAlert(props: {children: React.ReactNode}) {
  return <div className={classes.alert}>{props.children}</div>;
}
