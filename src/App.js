import React from 'react';

import { Header, Summary, Search, Detail, SummaryFallback } from './Components';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    console.log('cdm work');
    window
      .fetch('../fakeData.json') // 여기서 날아오는 JSON 자체가 문제일 것.
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({ data: json });
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <Header></Header>
        {data ? (
          <Summary
            TotalConfirmed={data.Global.TotalConfirmed}
            TotalDeaths={data.Global.TotalDeaths}
            TotalRecovered={data.Global.TotalRecovered}
          />
        ) : (
          <SummaryFallback />
        )}
        <Search></Search>
        <Detail></Detail>
      </>
    );
  }
}
