import { Component } from "react";
import ReactDOM from "react-dom";

class Portal extends Component {
  public el = document.createElement("div");

  public componentDidMount() {
    document.body.appendChild(this.el);
  }

  public componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  public render() {
    const { children } = this.props;

    return ReactDOM.createPortal(children, this.el);
  }
}

export default Portal;
