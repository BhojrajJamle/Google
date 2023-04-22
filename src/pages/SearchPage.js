import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useGoogleSearch from "../hooks/useGoogleSearch";
// import Response from "./chunk/Response";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchPage.css";
import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
} from "@material-ui/icons";

const SearchPage = () => {
  const term = useSelector((state) => state.term);

  // LIVE API CALL
  const { data } = useGoogleSearch(term);

  //   MOCK API CALL  it's kind of fake api in our own filr
  //   const data = Response;

  if (data) {
    return (
      <div className="searchPage">
        <div className="searchPage__header">
          <Link to="/">
            <img
              className="searchPage__logo"
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              alt=""
            />
          </Link>
          <div className="searchPage__headerBody">
            <Search hideButtons inputValue={term} />

            <div className="searchPage__options">
              <div className="searchPage__optionsLeft">
                <div className="searchPage__option">
                  <SearchIcon />
                  <Link to="/all">ALL</Link>
                </div>
                <div className="searchPage__option">
                  <Description />
                  <Link to="/News">News</Link>
                </div>
                <div className="searchPage__option">
                  <Image />
                  <Link to="/Images">Images</Link>
                </div>
                <div className="searchPage__option">
                  <LocalOffer />
                  <Link to="/Shopping">Shopping</Link>
                </div>
                <div className="searchPage__option">
                  <Room />
                  <Link to="/maps">maps</Link>
                </div>
                <div className="searchPage__option">
                  <MoreVert />
                  <Link to="/more">more</Link>
                </div>
              </div>
              <div className="searchPage__optionsRight">
                <div className="searchPage__option">
                  <Link to="/settings">Settings</Link>
                </div>
                <div className="searchPage__option">
                  <Link to="/tools">Tools</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {term && (
          <div className="searchPage__results">
            <p className="searchPage__resultCount">
              About {data?.searchInformation.formattedTotalResults} results in (
              {data?.searchInformation.formattedSearchTime} seconds) for {term}
            </p>

            {data.items &&
              data.items.map((item, i) => (
                <div className="searchPage__result" key={i}>
                  <a href={item.link}>
                    {item.pagemap?.cse_image?.length > 0 &&
                      item.pagemap?.cse_image[0]?.src && (
                        <img
                          className="searchPage__resultImage"
                          src={item.pagemap?.cse_image[0]?.src}
                          alt=""
                        />
                      )}

                    {item.displayLink}
                  </a>
                  <a className="searchPage__resultTitle" href={item.link}>
                    <h2>{item.title}</h2>
                  </a>
                  <p className="searchPage__resultSnippet">{item.snippet}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div
        style={{
          height: "40vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>Loading...</h2>
      </div>
    );
  }
};

export default SearchPage;
