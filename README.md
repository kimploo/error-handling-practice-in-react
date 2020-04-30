# Error Handling in React

Sprint URL : [https://github.com/kimploo/error-handling-practice-in-react/tree/sprint](https://github.com/kimploo/error-handling-practice-in-react/tree/sprint)

Reference URL : [https://github.com/kimploo/error-handling-practice-in-react/tree/reference](https://github.com/kimploo/error-handling-practice-in-react/tree/reference)

### Sprint Intro

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3a4e30a9-7901-471d-be62-ddcacbb8067b/Peek_2020-04-14_14-28.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3a4e30a9-7901-471d-be62-ddcacbb8067b/Peek_2020-04-14_14-28.gif)

여러분과 같은 이머시브 코스 수강생이 사이드 프로젝트로 야심차게 준비했던 코로나 바이러스 대시보드가 완성되지 못한 채로 마무리가 되었습니다. 우리는 이 프로젝트를 완성시키고, 어떤 에러가 있었는지 찾기 위해서 지금까지 배운 에러 핸들링 기술을 활용합니다. 또한 유지보수가 용이하게 에러가 발생할 수 있는 곳을 찾아 예외 처리가 충분히 되어있는 상태로 만들어야 합니다.

이 웹 어플리케이션은 비교적 단순한 기능을 가지고 있습니다.

- 전 세계 코로나 바이러스 감염자에 대한 정보를 제공합니다.
- 국가 별 바이러스 감염자에 대한 정보를 제공하고, 검색할 수 있습니다.

### Bare Minimum Requirement

- 자바스크립트 및 리엑트 기본 지식을 활용하여 문제가 되는 기능을 고칩니다.
- `Error Boundary` 를 적재적소에 활용하여, 에러가 나고 있는 부분을 찾습니다.
- `Error Boundary` 의 한계를 인지하고, 그에 맞는 에러 핸들링을 합니다.
- `prop-types` 라이브러리 공식문서를 보고, 활용법을 익히고 모든 컴포넌트에 적용합니다.
- 커스텀한 `Type Checking` 함수를 만들고 활용합니다.
- `Conditional Rendering` 을 활용하여 `Fallback UI` 를 제작합니다.

### Get Started!

**1. Setup development environment**

이 프로젝트는 Create-React-App으로 만들어져 있기 때문에, `yarn`을 사용합니다. `git clone`을 받아오셨다면, `yarn install`로 필요한 `npm packages`를 설치합니다. 기존 Create-React-App과 다른 점이 있는지 확인하세요. `Type Checking` 을 위한 패키지가 설치가 되어있는 것을 확인하실 수 있습니다.

**2. Understand project structure & Check TODOS**

프로젝트 곳곳에 TODO가 무엇을 해야 하는지 구체적으로 적혀있습니다. 배웠던 내용을 인지하고, 그에 맞게 에러 핸들링을 해주세요. TODO의 우선순위를 정하기 위해서, 스프린트를 이해하고, 무엇부터 개선해야 할지 고민해보세요. 어떤 기능을 먼저 작성해야 할지 짧게 고민하시는 것도 좋습니다.

- Type Checking

  컴포넌트 제작 시에, 미리 어떤 타입이 들어올지 고민을 하고 시작을 하는 것이 좋습니다. `props` 의 타입에 따라서 사용되어야 하는 메소드가 달라지고, 에러가 발생할 수 있기 때문입니다.

- Conditional Checking

  비동기적인 코드와 함께 물 흐르듯 웹 어플리케이션이 작동하기 위해서는 Conditional Rendering을 적극적으로 활용하는 것이 좋습니다. 이는 에러 핸들링을 할 때도 활용할 수 있습니다. `App.js`에서 어떻게 Conditional Rendering을 하고 있는지 확인하고, 다른 곳에서도 활용해보세요.

- Error Boundary

  어디에 `Error Boundary`를 사용해야 할지 스프린트 곳곳에 힌트가 있습니다. 효율적으로 `Error Boundary`를 지정하고 활용하세요.

- Basic JS & React Error Handling

  위 모든 에러 핸들링 기술을 활용하고 나서도, 에러 핸들링이 되지 않는 곳이 남아있습니다. 어디인지 찾아서 에러 핸들링을 적용하세요. 핸들링 된 에러를 확인하다보면, 곳곳에 나사가 빠져있는 코드를 발견할 수 있습니다. 이 역시 개선해야 코드가 완벽하게 작동할 것입니다. `this binding`에 대해서 찾아보시는 것은 어떨까요?

**3. Do More Error Handling**

에러 핸들링이 필요한 핵심적인 장소는 TODO로 제시되어 있습니다. 그 이외에 어떤 곳에서 에러 핸들링을 하면 좋을지 고민하고, 에러 타입에 따른 처리나 `Fallback UI` 를 만들어보세요.

### Advacned Challanges

- `Fallback UI` 를 기존 UI를 해치지 않게 개선하세요.
- 기존의 자리를 대체하는 `Fallback UI`가 아닌 다른 방법을 고민해보세요.

  좋은 예시 : 레딧 안내 및 경고창

  ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0a105dcb-48cd-4ebf-bed4-8354833fe783/Screenshot_from_2020-04-14_14-18-36.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0a105dcb-48cd-4ebf-bed4-8354833fe783/Screenshot_from_2020-04-14_14-18-36.png)

- [https://covid19api.com/](https://covid19api.com/) 의 API 문서를 참고하여, 국가 검색 시 더 구체적인 정보를 제공하세요. 다른 endpoint나 [다른 API](https://covid-19-apis.postman.com/)를 활용하셔도 좋습니다.

  좋은 예시 : [https://coronavirus.jhu.edu/map.html](https://coronavirus.jhu.edu/map.html)

  ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5ce950c5-16da-4242-b329-d141fdb3c524/Screenshot_from_2020-04-14_14-01-03.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5ce950c5-16da-4242-b329-d141fdb3c524/Screenshot_from_2020-04-14_14-01-03.png)

### Nightmare

- Automating Issue Ticket Creation

  Let your app automatically submit issue on github when error occured, [using npm package](https://www.npmjs.com/package/github-create-issue)
