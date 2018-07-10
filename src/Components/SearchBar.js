import React, { Component } from "react";

class SearchBar extends Component {
  interval = null;

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
  }

  setSearchTerm = e => {
    this.setState({ searchTerm: e.target.value });
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.interval = setTimeout(() => {
      this.props.onSearch(this.state.searchTerm);
    }, 250);
  };

  handleEnter = e => {
    if (e.key === "Enter") {
      this.props.onSearch(this.state.searchTerm);
      this.setState({ searchTerm: "" });
    }
  };

  render() {
    return (
      <input
        value={this.state.searchTerm}
        onChange={this.setSearchTerm}
        onKeyPress={this.handleEnter}
      />
    );
  }
}

export default SearchBar;
