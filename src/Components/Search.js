import React from 'react';
import PropTypes from 'prop-types';
import { SearchErrorBoundary } from './SearchErrorBoundary';
import { ErrorHere } from '../util/ErrorHere';

export class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
  }
  render() {
    const { input } = this.state;
    const { handleSearch, searchErrorFlag, toggleFlag } = this.props;

    return (
      <div id="search">
        <SearchErrorBoundary input={input} toggleFlag={toggleFlag}>
          {searchErrorFlag <= 0 ? <ErrorHere /> : null}
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
        </SearchErrorBoundary>
      </div>
    );
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func,
  searchErrorFlag: PropTypes.number,
  toggleFlag: PropTypes.func,
};
