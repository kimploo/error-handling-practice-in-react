import React from 'react';

import { Header, Summary, Search, Detail, SummaryFallback } from './Components';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      searchedData: null,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    window
      .fetch('../fakeData.json')
      .then((res) => res.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => console.error(error));
  }

  handleSearch(event, input) {
    event.preventDefault();
    console.log(input);
    const { data } = this.state;
    this.setState({
      searchedData: data.Countries.filter(function (country) {
        return country.Slug.includes(input);
      }),
    });
  }

  render() {
    const { data, searchedData } = this.state;

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
        <Search handleSearch={this.handleSearch} />
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
