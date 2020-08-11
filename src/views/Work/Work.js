import React from "react";

import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles();

export default function Work() {
    const classes = useStyles();
    // const { ...rest } = props;
    return (
      <div className={classes.container}>
        Work

      </div>
    );
  }