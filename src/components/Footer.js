import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import Github from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles(theme =>({
  bottomNavContainer: {
    background: "#222",
    top: "100vh",
    width: "100%",
    position: "absolute",
    marginTop: "19vh",
    [theme.breakpoints.down('576')]: {
      top: "117vh" }
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<LinkedIn />} href="https://www.linkedin.com/in/janit-chawla-478457191/" className={classes.root} />
      <BottomNavigationAction icon={<Twitter />} href="https://twitter.com/janitchawla/with_replies?s=08" className={classes.root} />
      <BottomNavigationAction icon={<Instagram />} href="https://www.instagram.com/chawlajanit" className={classes.root} />
      <BottomNavigationAction icon={<Github />} href="https://www.github.com/JanitChawla" className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;
