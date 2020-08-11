/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";

// @material-ui/icons
import AccessAlarm from "@material-ui/icons/AccessAlarm";
import styles from "./FooterStyle";

export default function Footer(props) {
    const classes = styles();
    const { whiteFont } = props;
    const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
        &copy; {1900 + new Date().getYear()} , made with precious{" "}
        <AccessAlarm className={classes.icon} /> by{" "}
          Carlos Gorrin for a better web.
        </div>
        <div className={classes.right}>
        
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="//www.linkedin.com/in/carlosgorrin/"
                className={classes.block}
                target="_blank"
              >
                linkedin
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="mailto:carlos.gorrin@gmail.com?subject=hello"
                className={classes.block}
                target="_blank"
              >
                Mail
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://github.com/CarlosGorrin"
                className={classes.block}
                target="_blank"
              >
                github
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://twitter.com/speedtetris"
                className={classes.block}
                target="_blank"
              >
                twitter
              </a>
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
