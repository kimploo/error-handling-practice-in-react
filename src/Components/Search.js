import React from 'react';
import PropTypes from 'prop-types';

export class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
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
            onChange={(e) => this.setState({ input: e.target.value })}
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

Search.propTypes = {
  handleSearch: PropTypes.func,
};
