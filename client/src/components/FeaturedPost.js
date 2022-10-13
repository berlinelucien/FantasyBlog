import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const FeaturedPost = (props) => {
  return (
    <Grid item xs={12} md={6}>
    <CardActionArea component="a" href="#">
      <Card sx={{ display: 'flex' , margin:"10px" }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
              {props.title}
          </Typography>
         
          <Typography variant="subtitle1" paragraph>
                        {props.description}
          </Typography>
          <Typography variant="subtitle1" color="primary">
              Continue reading...
            <div>{props.linktext}</div>
              
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: 190, display: { xs: 'none', sm: 'block' } }}
            src={props.imageUrl}
            alt={props.alt} />
      </Card>
    </CardActionArea>
  </Grid>
  )
}

export default FeaturedPost