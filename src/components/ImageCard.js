import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spans: 0}
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
      console.log(this.props.image)
      const height = this.imageRef.current.clientHeight;

      const spans = Math.ceil(height / 8)

      this.setState({spans})
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
          <a href={this.props.image.links.download} target="_blank" rel="noreferrer">
          <img ref={this.imageRef} src={urls.regular} alt={description}></img>
          </a>
        
        <p>Likes: {this.props.image.likes}</p>
      </div>
    );
  }
}

export default ImageCard;
