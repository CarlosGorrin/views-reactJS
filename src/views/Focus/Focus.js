import React from "react";

import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles();

export default function Focus() {
    const classes = useStyles();
    // const { ...rest } = props;
    return (
      <div className={classes.container}>
        Focus

      </div>
    );
  }