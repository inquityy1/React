import React from "react";

class SearchInput extends React.Component {
  state = {
    entry: "",
  };

  //   onInputChange(e) {
  //     e.preventDefault();
  //     console.log(e.target.value);
  //   }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="search..."
                onChange={(e) => this.setState({ entry: e.target.value })}
                value={this.state.entry}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchInput;
