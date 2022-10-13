import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MainHero from '../components/MainHero';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const About = () => {
  return (
    <div>
      <div>About</div>
      <MainHero
        title="TITLE"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in."
      />
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
            <Item>xs=8
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam. Arcu dictum varius duis at consectetur lorem. Donec pretium vulputate sapien nec sagittis aliquam. Mauris a diam maecenas sed enim ut sem viverra.
              </p>
          </Item>
        </Grid>
        <Grid item lg={4}>
            <Item>lg=4
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam. Arcu dictum varius duis at consectetur lorem. Donec pretium vulputate sapien nec sagittis aliquam. Mauris a diam maecenas sed enim ut sem viverra.
              </p>
          </Item>
        </Grid>
        <Grid item md={4}>
            <Item>md=4
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam. Arcu dictum varius duis at consectetur lorem. Donec pretium vulputate sapien nec sagittis aliquam. Mauris a diam maecenas sed enim ut sem viverra.
              </p>
          </Item>
        </Grid>
        <Grid item xs={8}>
            <Item>xs=8
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam. Arcu dictum varius duis at consectetur lorem. Donec pretium vulputate sapien nec sagittis aliquam. Mauris a diam maecenas sed enim ut sem viverra.
              </p>
          </Item>
        </Grid>
      </Grid>
      </Box>
      </div>
  )
}

export default About;