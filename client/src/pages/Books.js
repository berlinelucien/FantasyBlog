import React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ScrollToTop from "react-scroll-to-top";

//import MasonayGrid from "../components/MasonaryGrid";

const Books = () => {
  // initial state for authors
  const [authors, setAuthors] = useState([]);
  console.log("authors", authors);

  const [q, setQ] = useState("");
  const [searchParam] = useState(["title", "author"]);

  const searchItem = (authors) => {
    return authors.filter((data) => {
      return searchParam.some((newAuthor) => {
        return (
          data[newAuthor].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  };

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
      <div className="search-content">
      
        <input
          class="input is-success is-rounded"
          type="text"
          placeholder="Search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          />
     
      
      </div>
      <Box sx={{ width: 1600, height: 450, margin: "20px" }}>
        <ImageList variant="masonry" cols={6} gap={15}>
          {searchItem(authors).map((data, index) => (
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
