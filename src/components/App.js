import React from "react";
import unsplash from "../api/unsplash"
import SearchBar from "./SearchBar";
import ImageList from "./ImageList"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }
  async onSearchSubmit (term) {
    const response = await unsplash.get("search/photos", {
      params: { query: term }, //?query=term
    });

    this.setState({ images: response.data.results });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}></ImageList>
      </div>
    );
  }
}

export default App;
