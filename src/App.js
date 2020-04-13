import React from 'react';

import { Header, Summary, Search, Detail, SummaryFallback } from './Components';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      searchedData: null,
      input: null,
      searchErrorFlag: 1,
    };
    this.handleSearch = this.handleSearch.bind(this); // comment out to know where error bubbles up
    this.toggleFlag = this.toggleFlag.bind(this);
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
        searchErrorFlag: searchedData.length,
      });
    } catch (error) {
      console.error(error);
    }
  }

  toggleFlag() {
    this.setState({ searchErrorFlag: 1 });
  }

  render() {
    const { data, searchedData, searchErrorFlag } = this.state;

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
        <Search
          handleSearch={this.handleSearch}
          searchErrorFlag={searchErrorFlag}
          toggleFlag={this.toggleFlag}
        />
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
