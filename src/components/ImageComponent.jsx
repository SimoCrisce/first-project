import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.image}
          alt={this.props.alt}
          width={this.props.width}
          style={{ border: this.props.border }}
        />
      </div>
    );
  }
}

export default ImageComponent;
