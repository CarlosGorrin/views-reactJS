import React from "react";

import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles();

export default function Home() {
    const classes = useStyles();
    // const { ...rest } = props;
    return (
      <div className={classes.container}>
        Hola

      </div>
    );
  }