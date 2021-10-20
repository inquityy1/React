class Hello extends React.Component {
  render() {
    const props = this.props;
    return (
      <h1>
        Hi {props.to} from {props.from}
      </h1>
    );
  }
}
