import React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ScrollToTop from "react-scroll-to-top";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
//import MasonayGrid from "../components/MasonaryGrid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Books = () => {
  // initial state for authors
  const [authors, setAuthors] = useState([]);
  console.log("authors", authors);

  // get full list of artwork and title
  const getAuthors = async () => {
    const response = await fetch("http://localhost:4000/books");
    const data = await response.json();
    setAuthors(data);
  };
  useEffect(() => {
    getAuthors();
  }, []);

  return (
    <div className="explore">
      <ScrollToTop smooth color="#6f00ff" />
      <Box sx={{ width: 1600, height: 450 }}>
        <ImageList variant="masonry" cols={4} gap={8}>
          {authors.map((data, index) => (
            <ImageListItem key={index}>
              <img
                src={`${data.cover}?w=248&fit=crop&auto=format`}
                srcSet={`${data.cover}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={data.title}
                loading="lazy"
              />
             
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
};

export default Books;
