import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import project1 from "../images/color.jpeg";
import project2 from "../images/yt-api.jpg";
import project3 from "../images/Capture.PNG";
import project4 from "../images/qualiassist.png";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: '30px',
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Color Game",
    description: `Simple Color game in which you willbe provided with rgb color codes and you will have
     to guess color from the drop down menu. You have 2 modes easy and hard.`,
    image: project1,
    link: "https://github.com/JanitChawla/colorgame",
    live: "https://janitchawla.github.io/colorgame/",
  },
  {
    name: "Youtube API",
    description: `This basically calls
    the Youtube API and displays the results on the page with 25
    recommendations on the side. This also have search bar in which you
    can search for the videos and play them`,
    image: project2,
    link: "https://github.com/JanitChawla/YoutubePlayer",
    live: "https://janitchawla.github.io/YoutubePlayer/"
  },
  {
    name: "Burger Builder",
    description: `Burger Builder app in which a user can register and make a burger and Order. Technology Used: React for Frontend , Redux for State management and Firebase for backend and authentication`,
    live: "https://burger-builder-ff5ba.firebaseapp.com/",
    image: project3,
  },
  {
    name: "Project 4",
    description: `A website made by me as a intern at Metafic. Technology Used: React for Frontend and Bootstrap for styling`,
    live: "https://qualiassist.com/",
    image: project4,
  },
  {
    name: "Project 5",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project5,
  },
  {
    name: "Project 6",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project6,
  },
];

const Project = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="150"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={project.link} >
                  <GitHubIcon />
                </Button>
                <Button size="small" color="primary">
                  <a href={project.live}>Live Demo</a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Project;
