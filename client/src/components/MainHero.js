import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import dreamShip from "../images/dreamShip.jpg";

const MainHero = (props) => {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        margin:"10px",
        color: "#fff",
        mb: 5,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${dreamShip})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} src={dreamShip} alt="" />}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
               {props.title} 
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {props.description} 
            </Typography>
            <Link variant="subtitle1" href="#">
            {props.linktext} 
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MainHero;
