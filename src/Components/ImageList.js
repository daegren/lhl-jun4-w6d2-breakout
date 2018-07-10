import React from "react";

class ImageList extends React.Component {
  render() {
    return this.props.images.map(url => <img key={url} src={url} />);
  }
}

export default ImageList;
