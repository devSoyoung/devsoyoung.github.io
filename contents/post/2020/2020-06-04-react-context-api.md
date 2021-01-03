---
title: "Redux 말고 Context API로 간단하게 상태관리를 해봅시다"
date: "2020-06-04"
template: "post"
draft: false
path: "/posts/react-context-api/"
description: "Context API의 사용 방법에 대한 포스트입니다. 간단한 사용법부터 best practice까지 정리해보았습니다."
category: "React"
---

졸업 프로젝트에 React를 사용하고 있습니다. 복잡한 애플리케이션이 아니라서 리덕스 없이 사용하고 있었는데, 머나먼 거리에 떨어진 컴포넌트끼리 상태를 공유해야 하는 일이 생겼습니다.

Flux 패턴을 구현한 Redux를 사용하면 상태를 한 곳에서 관리합니다. 덕분에 props로 여러 컴포넌트에 불필요한 상태를 전달할 필요가 없어 효율적입니다. 다양한 미들웨어로 상태를 변경하는 과정에 날개를 달아줄 수도 있습니다. 하지만 다소 준비해줄 것이 많습니다.

![귀찮아요..](../../image/2020/2020-06-04-react-context-api/bothersomeness.jpeg)

그다지 복잡한 애플리케이션이 아니기 때문에, 번거롭게 하고싶지 않습니다. 🙅🏻‍♀

️**"Context API"**, 컴포넌트끼리 상태를 공유할 수 있는 간단한 방법이라는 것을 알고만 있었는데 이번 기회에 사용해보기로 마음을 먹었습니다.

## Context API는 무엇인가요?

먼저 간단히 Context를 살펴보겠습니다. 공식 문서에는 Context를 이렇게 소개하고 있습니다.

```
context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있습니다.
```

Context를 생성하고 해당 상태가 필요한 컴포넌트에서 Context를 가져다 사용하면 됩니다. 그래서 <span style="color: red;">컴포넌트 트리를 따라가며 props로 전달할 필요가 없습니다.</span>

> 리덕스에서 `connect`, `mapStateToProps`로 컴포넌트에 필요한 상태를 가져오듯, 원하는 컴포넌트에서 Context를 이용해 상태를 가져올 수 있습니다.

전역적으로 사용하는 상태를 Context로 사용하면 좋습니다. **테마**나 **로그인 한 사용자**, **언어** 등을 예로 들 수 있습니다.

## Context API 사용 예제

`Provider`, `Consumer` 등 컨텍스트에 필요한 개념을 (초)간단한 예제로 살펴보겠습니다.

```jsx
// App.jsx
import React from "react";
import ChildComponent from "./ChildComponent";

export const ThemeContext = React.createContext("light");

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <ChildComponent />
        </ThemeContext.Provider>
    );
}

export default App;
```

먼저 컴포넌트 트리 최상단에 있는 `App` 컴포넌트를 만들었습니다. 주목할 부분은 `React.createContext`로 컨텍스트를 생성한 부분과, return의 `<ThemeContext.Provider>` 입니다.

### `React.createContext`

```js
const ThemeContext = React.createContext(defaultValue);
```

컨텍스트를 생성할 수 있는 API입니다. 파라미터로 `defaultValue`를 받습니다. 이 값은 컨텍스트를 사용하는 컴포넌트에서 적절한 `Provider` _(아래에서 설명)_ 를 찾지 못했을 때 사용됩니다.

<span id="re-render"></span>

### `<Context.Provider>`

```jsx
<ThemeContext.Provider value={/* 전달할 어떤 값 */}>
```

`Provider`는 컨텍스트를 구독하는 컴포넌트에게 <span style="color: red;">컨텍스트의 변화</span>를 알려줍니다. 구독하는 컴포넌트들은 `value` props의 값을 받게 됩니다.

`Provider`는 중첩해서 사용할 수 있습니다. 위 예제를 예로 들면, `App` 컴포넌트보다 자식 컴포넌트에서 다시 `ThemeContext.Provider`를 사용할 수 있습니다. 이 경우 구독하는 컴포넌트에서 가장 가까운, 다시 말해 **더 아래에 있는** `Provider`의 값을 가져옵니다.

이 컨텍스트를 구독하는 컴포넌트들은 **`Provider`의 `value`가 변경될 때 <span style="color: red;">다시 렌더링</span> 됩니다.** 예제에서는 변경되지 않는 문자열 값을 넣어줬지만, 상태를 넣는다면 상태가 바뀔 때 다시 렌더링 될 것입니다.

<br />

이제 컨텍스트를 사용할 컴포넌트를 만들어보겠습니다. `App` 컴포넌트의 자식인 `ChildComponent`의 자식입니다.

> App > ChildComponent > Theme 순서라고 생각하시면 됩니다.

```jsx
// Theme.jsx
import React from "react";
import { ThemeContext } from "./App.jsx";

function Theme() {
    return (
        <ThemeContext.Consumer>
            {value => <span>테마 : {value}</span>}
        </ThemeContext.Consumer>
    );
}

export default Theme;
```

컨텍스트를 사용할 컴포넌트에서는 아까 만들었던 `ThemeContext`를 import해서 사용합니다. 이 예제에서 `value`로 전달되는 값은 `App` 컴포넌트의 `Provider`에서 전달한 **dark**가 됩니다.

> `createContext`에서 전달한 `defaultValue`(light)가 아님을 다시 한 번 강조합니다.

### `<Context.Consumer>`

```jsx
<ThemeContext.Consumer>
  {value => /* 값을 사용하여 React 노드 반환 */}
</ThemeContext.Consumber>
```

`Consumer`는 컨텍스트의 변화를 구독하고 값을 사용합니다. 이 때, `Consumer`의 **자식은 반드시 함수**여야 합니다.

이 함수는 **파라미터로 컨텍스트의 값**을 받습니다. 아까 `Provider`의 `value` 프로퍼티입니다. **반환 값은 React 노드**입니다.

### ➕ 클래스형 컴포넌트에서 컨텍스트 구독하기

클래스형 컴포넌트에서는 다른 방식으로 컨텍스트를 구독할 수도 있습니다.

```jsx
import React from "react";
import { ThemeContext } from "./App";

class MyComponent extends React.Component {
    constructor() {
        console.log(this.context);
    }
}
MyComponent.contextType = ThemeContext;
```

클래스에 `contextType` 프로퍼티로 컨텍스트 객체를 지정하면 해당 클래스 내에서 `this.context`로 접근할 수 있습니다.

단 `contextType` 프로퍼티에 여러 개의 컨텍스트 객체를 지정할 수 없기 때문에, 이 방법은 하나의 컨텍스트만 구독할 수 있습니다.

<br />

## 구독하는 컴포넌트에서 컨텍스트 값 바꾸기

구독 컴포넌트에서 얌전히 값을 가져다 쓰면 좋겠지만, 현실은 그렇게 간단할 리 없습니다!

<img src="https://1.gall-gif.com/hygall/files/attach/images/82/562/581/046/2d39299ec08cb0819db59d85e5fd037f.gif" style="width: 500px; display: block; margin: auto;">

<br />

구독하는 컴포넌트(Consumer)에서도 컨텍스트 값을 변경할 수 있는 예제를 만들어봅시다.

> React 공식 문서의 [Context](https://ko.reactjs.org/docs/context.html#caveats) 예제를 가져왔습니다.

먼저, 아까 예제와는 다르게 context를 별도의 파일에 분리해서 만들어봅시다. 각 컴포넌트에 컨텍스트가 있으면 어디에 있는지 몰라 컨텍스트를 가져오거나 관리하기가 어려우니 말입니다.

<span id="theme-context-code"></span>

```jsx
// theme-context.js
import { createContext } from "react";

export const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

export const ThemeContext = createContext({
    theme: themes.light,
    setTheme: () => {}
});
```

이렇게 컨텍스트 객체를 컴포넌트와 분리해두면, 컨텍스트의 값을 더 깔끔하게 관리할 수 있습니다.

주목할 부분은 `createContext`의 파라미터입니다. 이전에는 값만 넘겼는데, 이제 이 값을 변경할 함수를 같이 전달해 줍니다. `defaultValue`는 적절한 `Provider`를 찾지 못했을 때 사용하는 값이기 때문에, 아무런 동작을 하지 않더라도 오류가 나지 않게 _빈 함수를 넘겨줍니다._

```jsx
// App.jsx
import React, { useState } from "react";
import { ThemeContext, themes } from "./theme-context";

function App() {
    const [theme, setTheme] = useState(themes.dark);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ChildComponent />
        </ThemeContext.Provider>
    );
}
```

`App` 컴포넌트에서는 `Provider`의 `value` props에 상태를 전달해줍니다. 이 상태가 `setTheme`로 변경되면 해당 컨텍스트를 구독하는 컴포넌트들이 <a href="#re-render">다시 렌더링</a> 될 겁니다.

또 하나 중요한 것은 ⚠️ `theme` 상태를 변경할 수 있는 `setTheme` 함수를 `Provider`의 `value` props에 함께 넘겨준다는 점입니다.

```jsx
// Theme.jsx
import React from "react";
import { ThemeContext, themes } from "./theme-context";

function Theme() {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <button onClick={() => setTheme(theme === themes.dark ? themes.light : themes.dark)}>
          {theme === themes.dark ? "밝은모드로 전환" : "다크모드로 전환"}
        </button>
      ))}
    </ThemeContext.Consumer>
  );
}
```

`Consumer`에서 컨텍스트의 값을 받았습니다.

> [구조분해 할당 문법](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)으로 `theme`, `setTheme`를 가져옵니다.

그리고 `<button>`을 반환하는데, 컨텍스트의 테마 값에 따라 버튼의 내용과 클릭했을 때 설정하는 테마 값이 달라집니다. 이렇게 구독하는 컴포넌트에서도 상태를 바꿀 수 있는 컨텍스트 사용법을 알아봤습니다.

## ⚠️ 컨텍스트를 사용할 때 주의해야 할 점

아까 `theme-context.js`에서 [테마 값 객체를 변수에 정의](#theme-context-code)했습니다. 이 경우처럼 컨텍스트의 값이 객체일 때 주의해야 할 점이 있습니다.

컨텍스트에서 `Provider`의 `value` 값이 변경되면 구독하는 컴포넌트(Consumer)가 다시 렌더링된다고 했었는데요, 이 변경 여부를 확인하는 방법이 중요합니다. `Object.is`의 알고리즘에 따라 변경 여부를 비교합니다.

`Object.is([], [])` 결과는 false 입니다. 서로 다른 객체 리터럴(`{}`)도 당연히 false 입니다.

```jsx
// theme-context.js
import { createContext } from "react";

export const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};
```

여기에서 `themes`를 가져다쓰지 않고 `{ foreground: ... }`로 새로운 객체 리터럴을 만든다면 우리가 보기에 같은 값이라도 자바스크립트에게는 다른 값입니다. ~~그러면 렌더링이 다시 발..생..~~

![충격](https://lh3.googleusercontent.com/proxy/aHmjNTTw0Wigl2JcBYd8GPLXuwyg-iNTGHhhIRjkQ3UfwDY-S9ps0eIFO00oUkJFTD6ylvZuyElI7aQ)

그래서 컨텍스트의 값으로 객체를 사용할 때는 나의 작은 실수로 불필요한 렌더링이 발생하지 않는지 꼭 주의해야 합니다.

## 마무리하며..

이 포스트 description에는 best practice도 정리했다며 야심차게 글을 시작했지만 쓰다보니 너무 길어져서 컷하려고 합니다. 2탄에서 이어서 쓸거예요..

리덕스보다 훨씬 간단하고, 추가적인 라이브러리가 필요없다는 점이 장점이 아닌가 생각해봅니다. 그렇지만 여러 개의 컨텍스트를 구독하면 지저분해 질 것 같다는 생각이 확 들면서.. 간단한 프로젝트에만 써야겠다는 생각도 듭니다.

Best Practice를 살펴보고 좀 더 공부해봐야겠습니다. 2탄을 꼭 쓰기를 바라며.. 끝!
