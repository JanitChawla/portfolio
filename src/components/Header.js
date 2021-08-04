import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../hacker.png";
import './Header.css'

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
    <Box className='typedContainer'>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Janit" />
      </Grid>
      <Typography className='title' variant="h4">
        <Typed strings={["Janit Chawla"]} typeSpeed={40} />
      </Typography>

      <Typography className='subtitle' variant="h5">
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
      <div className='info' >
      Proficient with MERN stack and languages such as HTML, CSS, JS, C/C++ and Python. I'm also an open source enthusiast and love to contribute and collaborate to build something exciting!
      </div>
    </Box>
    </React.Fragment>
  );
};

export default Header;
