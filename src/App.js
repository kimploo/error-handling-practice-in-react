import React from 'react';

import { Header, Summary, Search, Detail, SummaryFallback } from './Components';
import { ErrorHere } from './util/ErrorHere';
import { SearchErrorBoundary } from './SearchErrorBoundary';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      searchedData: null,
      input: null,
    };
    this.handleSearch = this.handleSearch.bind(this); // comment out to know where error bubbles up
  }

  componentDidMount() {
    window
      .fetch('../fakeData.json') // use fakeData if this API is not working
      .then((res) => res.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => console.error(error));
  }

  handleSearch(event, input) {
    try {
      event.preventDefault();
      const { data } = this.state;
      const searchedData = data.Countries.filter(function (country) {
        return country.Slug.includes(input);
      });
      this.setState({
        searchedData,
        input,
        serachErrorFlag: searchedData.length,
      });
    } catch (error) {
      console.error(error);
    }
  }

  isSearchError() {
    const { serachErrorFlag } = this.state;
    return serachErrorFlag <= 0 ? true : false;
  }

  render() {
    const { data, searchedData, serachErrorFlag } = this.state;

    return (
      <>
        <Header />
        {data ? (
          <Summary
            TotalConfirmed={data.Global.TotalConfirmed}
            TotalDeaths={data.Global.TotalDeaths}
            TotalRecovered={data.Global.TotalRecovered}
          />
        ) : (
          <SummaryFallback />
        )}
        <SearchErrorBoundary>
          <Search handleSearch={this.handleSearch} />
          {this.isSearchError() ? <ErrorHere /> : null}
        </SearchErrorBoundary>
        {searchedData ? (
          <Detail Countries={searchedData}></Detail>
        ) : data ? (
          <Detail Countries={data.Countries} />
        ) : (
          <div id="detail">loading...</div>
        )}
      </>
    );
  }
}
