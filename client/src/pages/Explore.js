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

const Explore = () => {
// initial state for artwork
    const [artwork, setArtwork] = useState([]);
    console.log("artwork", artwork);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["title"]);

    const searchItem = (artwork) => {
        return artwork.filter((data) => {
            return searchParam.some((newArt) => {
                return (
                    data[newArt].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
                );
            });
        });
    };


// get full list of artwork and title
    const getArtworks = async () => {
        const response = await fetch("http://localhost:4000/artwork");
        const data = await response.json();
        setArtwork(data);
    };
    useEffect(() => {
        getArtworks()
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
          <Box sx={{ width: 1600, height: 450, margin:"20px"}}>
            <ImageList variant="masonry" cols={4} gap={8}>
                    {searchItem(artwork).map((data, index) => (
                        <ImageListItem key={index}>
                            <img
                                src={`${data.artwork}?w=248&fit=crop&auto=format`}
                                srcSet={`${data.artwork}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={data.title}
                                loading="lazy"
                            />
                            <p>{data.title }</p>  
                        </ImageListItem>
                    ))}
            </ImageList>
          </Box>
        </div>
  );
};

export default Explore;
