import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Search = ({ hideButtons = false, inputValue }) => {
  const [input, setInput] = useState(inputValue ? inputValue : "");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const search = (e) => {
    e.preventDefault();

    if (input.trim().length > 0) {
      dispatch({ type: "SET_SEARCH_TERM", term: input });
      setTimeout(() => {
        navigate("/search");
      }, 100);
    } else {
      return;
    }
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search Google or type a URL"
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button onClick={search} variant="outlined">
            I'm Felling Lucky
          </Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden "
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button
            className="search__buttonsHidden "
            onClick={search}
            variant="outlined"
          >
            I'm Felling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
