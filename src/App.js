import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ImageList from "./Components/ImageList.js";
import SearchBar from "./Components/SearchBar.js";
import { Pulse } from "better-react-spinkit";

const SearchList = ({ searches, onSearch }) => {
  const handleSearch = term => e => {
    onSearch(term);
  };

  return (
    <div>
      <h2>Previous Searches</h2>
      <ul>
        {searches.map(s => (
          <li key={s} onClick={handleSearch(s)}>
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
};

class App extends Component {
  state = {
    previousSearches: [],
    images: [],
    loading: false
  };

  fetchImages = query => {
    this.setState({ loading: true });

    const url = new URL("https://www.reddit.com/r/aww/search.json");
    url.searchParams.append("q", query);
    url.searchParams.append("type", "link");
    url.searchParams.append("restrict_sr", "true");

    fetch(url)
      .then(response => response.json())
      .then(json => {
        let images = json.data.children
          .map(child => child.data.thumbnail)
          .filter(thumb => thumb !== "default");

        this.setState({ images, loading: false });
      });
  };

  render() {
    return (
      <div className="App">
        <h1>images!</h1>

        <div>
          <SearchBar onSearch={this.handleSearch} />
        </div>
        <div className="container">
          <div>
            {this.state.loading ? (
              <Pulse size={100} />
            ) : (
              <ImageList images={this.state.images} />
            )}
          </div>
          <SearchList
            searches={this.state.previousSearches}
            onSearch={this.fetchImages}
          />
        </div>
      </div>
    );
  }

  handleSearch = term => {
    this.fetchImages(term);
    this.setState(prevState => {
      return {
        ...prevState,
        previousSearches: prevState.previousSearches.concat(term)
      };
    });
  };
}

export default App;
