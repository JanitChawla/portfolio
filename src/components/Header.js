import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../hacker.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  info: {
    color: '#D5D5D5',
    width: "65vw",
    margin: 'auto',
    fontSize: '1.2rem'
  },
  typedContainer: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "95vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Janit" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Janit Chawla"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Frontend Developer",
            "Backend Developer",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
      {/* <Typography className={classes.info} variant="h6">
        <Typed className={classes.para} strings={["Proficient with MERN stack and languages such as HTML, CSS, JS, C/C++ and Python. I'm also an open source enthusiast and love to contribute and collaborate to build something exciting!"]} />
      </Typography> */}
      <div className={classes.info} >
      Proficient with MERN stack and languages such as HTML, CSS, JS, C/C++ and Python. I'm also an open source enthusiast and love to contribute and collaborate to build something exciting!
      </div>
    </Box>
    </React.Fragment>
  );
};

export default Header;
