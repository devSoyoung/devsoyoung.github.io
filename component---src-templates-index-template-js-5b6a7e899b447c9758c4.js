(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"999l":function(t,e,a){"use strict";a.r(e);var o=a("H7FH"),r=a("q1tI"),n=a.n(r),s=a("Bl7J"),i=a("vrFN"),c=a("Wbzz"),d=a("PoU3"),p=(a("9O8A"),function(t){var e=t.item,a=e.title,o=e.description,r=e.path,s=e.date,i=e.category;return n.a.createElement("div",{className:"post-item-container"},n.a.createElement("div",{className:"post-item-info"},n.a.createElement(d.a,{category:i,date:s})),n.a.createElement(c.Link,{to:r},n.a.createElement("h2",{className:"post-item-title"},a)),n.a.createElement("div",{className:"post-item-description"},o))}),l=(a("ta0T"),function(t){var e=t.posts;return n.a.createElement("div",{className:"post-list"},e.map((function(t,e){return n.a.createElement(p,{item:t.node.frontmatter,key:"post-list-"+e})})))});e.default=function(){var t=o.data.allMarkdownRemark.edges;return n.a.createElement(s.a,{type:"main"},n.a.createElement(i.a,{title:"Home"}),n.a.createElement(l,{posts:t}))}},H7FH:function(t){t.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"description":"Context API의 사용 방법에 대한 포스트입니다. 간단한 사용법부터 best practice까지 정리해보았습니다.","title":"Redux 말고 Context API로 간단하게 상태관리를 해봅시다","path":"/posts/react-context-api/","date":"2020-06-04","category":"React"}}},{"node":{"frontmatter":{"description":"useState를 사용한 함수형 컴포넌트가 두 번 호출되는 이유를 정리한 글입니다. React의 strict 모드에 대해 설명합니다.","title":"[React] useState를 사용한 함수형 컴포넌트는 왜 두 번 실행될까?","path":"/posts/react-usestate-double-invoked/","date":"2020-05-17","category":"React"}}},{"node":{"frontmatter":{"description":"CRA(create-react-app)으로 만든 React 프로젝트에서 eject를 하지 않고 Sass를 적용하는 방법을 정리한 글입니다.","title":"CRA로 만든 React 프로젝트에서 eject 없이 Sass 적용하기","path":"/posts/react-sass-without-eject/","date":"2020-04-08","category":"React"}}},{"node":{"frontmatter":{"description":"코드 실행시간을 측정할 수 있는 console.time, console.timeEnd에 대한 글입니다.","title":"console.time: 코드 실행시간 측정하기","path":"/posts/console-time/","date":"2020-03-25","category":"Javascript"}}},{"node":{"frontmatter":{"description":"Gatsby로 블로그를 만들었던 과정을 정리한 글입니다.","title":"Gatsby로 블로그 만들기","path":"/posts/gatsby-blog/","date":"2020-03-24","category":"Programming"}}},{"node":{"frontmatter":{"description":"2019년 한 해를 돌아보며 배우고 느꼈던 것을 정리했습니다.","title":"2019년을 돌아보며","path":"/posts/goodbye-2019/","date":"2019-12-19","category":"REVIEW"}}},{"node":{"frontmatter":{"description":"많은 채용 공고를 보면 git 사용 경험이 있는 개발자를 원한다는 것을 알 수 있습니다. 버전 관리 도구인 git, 왜 써야할까요? ","title":"버전 관리 도구 Git, 왜 써야하나요?","path":"/posts/why-git/","date":"2019-12-18","category":"ETC"}}},{"node":{"frontmatter":{"description":"create-react-app으로 프로젝트를 생성했을 때, index.js 등의 파일이 생성되지 않는 문제의 해결방법입니다.","title":"create-react-app으로 생성한 폴더에 아무것도 안 생길 때","path":"/posts/cra-reinstall/","date":"2019-12-06","category":"React.js"}}},{"node":{"frontmatter":{"description":"Docker에 대한 개념을 정리한 글입니다.","title":"Docker란 무엇인가","path":"/posts/docker-overview/","date":"2019-10-17","category":"Docker"}}},{"node":{"frontmatter":{"description":"On-Premise와 Cloud Computing의 차이를 정리한 글입니다.","title":"On-Premise와 Cloud Computing","path":"/posts/on-premise-vs-cloud-computing/","date":"2019-10-16","category":"ETC"}}},{"node":{"frontmatter":{"description":"Google Colab에서 GPU을 사용하는 방법을 정리한 글입니다.","title":"Google Colab에서 GPU 사용 설정하기","path":"/posts/colab-gpu/","date":"2019-09-29","category":"ETC"}}},{"node":{"frontmatter":{"description":"Docker의 모든 컨테이너를 삭제하는 명령어를 정리한 글입니다.","title":"[Docker] 모든 컨테이너 삭제하기","path":"/posts/docker-rm-all/","date":"2019-09-26","category":"Docker"}}},{"node":{"frontmatter":{"description":"Docker를 이용한 Tensorflow 개발환경 구축방법을 정리한 글입니다.","title":"[Docker] Tensorflow 개발환경 구축하기","path":"/posts/docker-tensorflow/","date":"2019-09-22","category":"Docker"}}},{"node":{"frontmatter":{"description":"GitHub의 User Site를 만들 때, 배포를 위한 브랜치와 소스코드를 위한 브랜치 구분 방법을 정리한 글입니다.","title":"Github Pages: 사용자 사이트 소스코드와 배포할 코드 분리하기","path":"/posts/how-to-use-gh-pages/","date":"2019-09-19","category":"Etc"}}},{"node":{"frontmatter":{"description":"React의 새로운 API인 Hooks가 무엇이며 왜 등장하게 되었는지에 대해 간략히 정리했습니다. 덧붙여서 내장 Hooks인 useEffect와 useState의 예제 코드도 함께 정리했습니다.","title":"[React] Hooks 이해하기: useState, useEffect","path":"/posts/react-hooks-1/","date":"2019-08-28","category":"React"}}},{"node":{"frontmatter":{"description":"React에 Selector 패턴을 적용했을 때의 장점과 reselect 라이브러리에 대해 정리한 글입니다.","title":"[React] Selector Pattern과 Reselect","path":"/posts/selector-pattern-and-reselect/","date":"2019-08-06","category":"React"}}},{"node":{"frontmatter":{"description":"React의 상태관리 라이브러리인 Redux와 Redux의 미들웨어 thunk, saga에 대해 정리한 글입니다.","title":"[React] Redux와 Redux 미들웨어 - thunk, saga","path":"/posts/redux-middleware/","date":"2019-07-18","category":"React"}}},{"node":{"frontmatter":{"description":"터미널에서 mysql을 실행할 때, sudo로만 로그인이 가능한 문제를 해결하는 방법에 대한 글입니다.","title":"[MySQL] 터미널에서 sudo 없이 mysql 접속이 불가능 할 때","path":"/posts/mysql-sudo-login/","date":"2019-07-10","category":"Database"}}},{"node":{"frontmatter":{"description":"scrypt를 npm으로 설치하는 과정에서 겪었던 node-gyp rebuild 오류 해결 과정을 정리한 글입니다.","title":"node-gyp rebuild 오류 해결과정","path":"/posts/node-gyp-rebuild-error/","date":"2019-07-04","category":"Error"}}},{"node":{"frontmatter":{"description":"rest API의 underfetching, overfetching 개념에 대해 정리한 글입니다.","title":"Rest API의 UnderFetching, OverFetching","path":"/posts/underfetching-overfetching/","date":"2019-06-26","category":"WEB"}}},{"node":{"frontmatter":{"description":"create-react-app으로 프로젝트를 생성할 때, Typescript를 적용한 프로젝트를 만드는 방법에 대하여 정리한 글입니다.","title":"[React] Typescript로 react 프로젝트 생성하기","path":"/posts/typescript-react-project/","date":"2019-06-08","category":"React"}}},{"node":{"frontmatter":{"description":"Node.js의 대표적인 프레임워크 중 하나인 Koa에 대해 간단히 정리한 글입니다.","title":"Koa 프레임워크 시작하기","path":"/posts/koa-api-tutorial/","date":"2019-05-11","category":"Node.js"}}},{"node":{"frontmatter":{"description":"Shadow DOM의 개념과 사용법에 대해 정리한 글입니다.","title":"[HTML] Shadow DOM의 개념 및 사용 예시","path":"/posts/shadow-dom/","date":"2019-05-07","category":"HTML"}}},{"node":{"frontmatter":{"description":"github에서 Markdown 형식의 문서를 작성할 때, 이미지의 크기를 조절하는 방법과 정렬하는 방법을 정리한 글입니다.","title":"Markdown 이미지 크기 조절, 정렬 방법","path":"/posts/markdown-image-tag/","date":"2019-05-06","category":"ETC"}}},{"node":{"frontmatter":{"description":"HTML 파일 한글 인코딩이 깨질 때, 인코딩 방식을 지정해주는 메타태그에 대해 정리한 글입니다.","title":"[HTML] 인코딩 설정 메타태그","path":"/posts/html-encoding/","date":"2019-05-06","category":"HTML"}}},{"node":{"frontmatter":{"description":"프론트엔드 개발을 하면서 접하게 된 웹팩을 왜 써야하는지, 어떻게 프로젝트에 적용할 수 있는지에 대한 내용을 간단히 정리한 글입니다.","title":"Webpack 초간단 정리","path":"/posts/webpack-introduce","date":"2019-05-04","category":"Webpack"}}},{"node":{"frontmatter":{"description":"2019년 4월 11일, 네이버 프론트엔드 테크콘서트에서 진행되었던 [오늘부터 나도 FE 성능분석가] 세미나를 듣고 내용을 정리한 글입니다.","title":"[TECHCON] 오늘부터 나도 FE 성능분석가","path":"/posts/naver-tech-concert-review-4","date":"2019-04-13","category":"Seminar"}}},{"node":{"frontmatter":{"description":"2019년 4월 11일, 네이버 프론트엔드 테크콘서트에서 진행되었던 플랫폼 UI 개발 전략의 모든 것세미나를 듣고 내용을 정리한 글입니다.","title":"[TECHCON] 플랫폼 UI 개발 전략의 모든 것","path":"/posts/naver-tech-concert-review-1","date":"2019-04-12","category":"Seminar"}}},{"node":{"frontmatter":{"description":"2019년 4월 11일, 네이버 프론트엔드 테크콘서트에서 진행되었던 [데이터 상태 관리, 그것을 알려주마!] 세미나를 듣고 내용을 정리한 글입니다.","title":"[TECHCON] 데이터 상태 관리, 그것을 알려주마!","path":"/posts/naver-tech-concert-review-2","date":"2019-04-12","category":"Seminar"}}},{"node":{"frontmatter":{"description":"2019년 4월 11일, 네이버 프론트엔드 테크콘서트에서 진행되었던 [빠르게 훑어보는 웹 개발 트렌드] 세미나를 듣고 내용을 정리한 글입니다.","title":"[TECHCON] 빠르게 훑어보는 웹 개발 트렌드","path":"/posts/naver-tech-concert-review-3","date":"2019-04-12","category":"Seminar"}}},{"node":{"frontmatter":{"description":"Javascript에서 가장 많이 수행하는 event 등록, event 관련 메소드에 대해 정리한 글입니다.","title":"[JS] 이벤트 등록: addEventListener()","path":"/posts/js-event-basic","date":"2019-03-26","category":"Javascript"}}},{"node":{"frontmatter":{"description":"Javascript의 예외처리 방법에 대해 정리한 글입니다.","title":"[JS] 예외처리: try, catch, finally","path":"/posts/js-exception","date":"2019-03-26","category":"Javascript"}}},{"node":{"frontmatter":{"description":"Javascript의 Element Collection인 HTMLCollection과 NodeList의 공통점, 차이점을 정리한 글입니다.","title":"HTMLCollection과 NodeList 살펴보기","path":"/posts/js-htmlcollection-nodelist","date":"2019-03-26","category":"Javascript"}}},{"node":{"frontmatter":{"description":"Javascript의 Timer 관련 함수인 setTimeout, setInterval에 대해 정리한 글입니다.","title":"[JS] Timer: setTimeout, setInterval","path":"/posts/js-timer","date":"2019-03-26","category":"Javascript"}}},{"node":{"frontmatter":{"description":"CSS의 주요속성 중 하나인 display 속성과, 속성값 중 inline과 block이 어떤 차이가 있는지 정리한 글입니다.","title":"[CSS] display: inline과 block의 차이","path":"/posts/css-display-attribute/","date":"2019-03-26","category":"CSS"}}},{"node":{"frontmatter":{"description":"Python 배포판 아나콘다의 설치 방법과 자주 사용하는 명령어를 정리한 글입니다.","title":"아나콘다 설치방법, 주요 명령어 정리","path":"/posts/python-anaconda/","date":"2019-02-01","category":"Python"}}}]}}}')}}]);
//# sourceMappingURL=component---src-templates-index-template-js-5b6a7e899b447c9758c4.js.map