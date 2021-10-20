class Hello extends React.Component {
  static defaultProps = {
    from: "Anonymous",
    bangs: 1,
  };

  render() {
    const colors = { fontSize: "50px", backgroundColor: "purple" };
    let bangs = "!".repeat(this.props.bangs);

    return (
      <div className="Hello">
        <p style={colors}>
          Hi {this.props.to} from {this.props.from}
          {bangs}
        </p>
        {/* <p className={winner ? "win" : "lose"}>
          {winner ? "Winner!" : "Loser!"}
        </p> */}
      </div>
    );
  }
}
