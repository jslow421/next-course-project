import classes from './event-content.module.scss';
import React from "react";

function EventContent(props: {children: React.ReactNode}) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
