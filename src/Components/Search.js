import React from 'react';

export class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  render() {
    const { input } = this.state;
    const { handleSearch } = this.props;

    return (
      <div id="search">
        <form
          id="searchForm"
          method="post"
          onSubmit={(event) => {
            handleSearch(event, input);
          }}
        >
          <input
            type="search"
            id="searchInput"
            placeholder="search your location..."
            value={input}
            onChange={this.handleChange.bind(this)}
            required
          />
          <button type="submit" id="searchButton">
            search
          </button>
        </form>
      </div>
    );
  }
}
