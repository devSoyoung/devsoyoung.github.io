---
title: "[React] useRef: 꼭 DOM 접근에만 사용해야 할까?"
date: "2020-04-13"
template: "post"
draft: true
path: "/posts/useref-usage/"
description: "React Hooks API 중 하나인 useRef는 DOM 접근을 위해 사용하는 API로 알려져있습니다. useRef의 또 다른 사용 용도를 소개하는 글입니다."
category: "React"
---

친구가 React와 관련해서 물어오기에 답변을 해주다 `useRef`에 관해 새로운 사실을 알게 되어 글로 정리하게 되었습니다.

## DOM 접근을 위한 useRef

자바스크립트로 DOM에 접근할 때는 `document.querySelector()`나 `document.getElementByClassName()` 등을 사용합니다. 하지만 리액트에서는 이런 API를 사용하는 코드를 본 적이 없을 것입니다. React에서 HTML 엘리먼트를 추가하기 때문에 접근할 수 있는 방법도 제공합니다. 굳이 앞에서 언급한 API들로 DOM 탐색 비용을 낭비할 필요가 없습니다.

과거 Hook API가 없었을 때는 `createRef()`를 사용했습니다. 포커스나 스크롤을 위해 많이 사용되었습니다. 아래와 같이 `Ref` 변수를 만들 수 있습니다.

```jsx
import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return <div ref={this.myRef} />;
  }
}
```

`ref` 변수의 `current` 프로퍼티로 현재의 HTMLElement에 접근할 수 있습니다.

```js
const node = myRef.current;
```

## `useRef`
