class Hello extends React.Component {
  render() {
    let bangs = "!".repeat(this.props.bangs);
    const props = this.props;
    return (
      <div>
        <p>
          Hi {props.to} from {props.from}
          {bangs}
        </p>
        <img src={this.props.img} />
      </div>
    );
  }
}
