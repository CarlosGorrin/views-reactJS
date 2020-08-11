import React from "react";

import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles();

export default function About() {
    const classes = useStyles();
    // const { ...rest } = props;
    return (
      <div className={classes.container}>
        About

      </div>
    );
  }