class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My Image!</h1>
        <img src="https://images.unsplash.com/photo-1634703080363-98f94e5a1076?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=725&q=80" />
        ;
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
