import React from "react";

import { makeStyles, ButtonGroup, Button } from "@material-ui/core";


const useStyles = makeStyles();

export default function Nav() {
    const classes = useStyles();
    // const { ...rest } = props;
    return (
      <div className={classes.container}>
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button>About</Button>
            <Button>Stack</Button>
            <Button>Work</Button>
            <Button>Focus</Button>
        </ButtonGroup>

      </div>
    );
  }