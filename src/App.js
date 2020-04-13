import React from 'react';

import { Header, Summary, Search, Detail } from './Components';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      searchedData: null,
      input: null,
      searchErrorFlag: 1,
    };
  }

  componentDidMount() {
    // TODO : https://api.covid19api.com/summary 에서 JSON을 받아와서, setState하여 활용하세요.
    // 잘못된 JSON이 날아오는 경우를 고려하여 에러 핸들링이 되어있어야 합니다.
    // 서버 API가 작동하지 않는 경우 fakeData를 활용하세요.
  } // 잘못된 JSON이 날아오는 경우를 고려하여 테스트 케이스를 작성합니다.

  handleSearch(event, input) {
    const searchedData = null; // TODO : 원하는 결과만 화면에 랜더할 수 있도록 setState될 searchedData를 할당하세요.
    this.setState({
      searchedData,
      input,
      searchErrorFlag: searchedData.length,
    });
    // TODO : 이벤트 핸들러를 에러 핸들링 하세요.
  }

  toggleFlag() {
    // TODO : toggleFlag 함수를 작성하세요. 어떤 기능을 하는지 스스로 확인하세요.
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
          <div>loading...</div> // TODO : SummaryFallback.js를 생성하고, Fallback UI를 만들어보세요.
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
