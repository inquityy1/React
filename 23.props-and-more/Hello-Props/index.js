class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to="Ringo"
          from="Paul"
          bangs={4}
          img="https://images.unsplash.com/photo-1634659929279-d9955e1784a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
