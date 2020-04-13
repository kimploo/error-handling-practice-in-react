import React from 'react';
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
            {/* onSubmit 자리를 비우면 난이도 향상이 가능합니다. 에러 핸들링보다는 React 공부에 도움이 될 듯 합니다.*/}
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
  // TODO : Do Type Checking
};
