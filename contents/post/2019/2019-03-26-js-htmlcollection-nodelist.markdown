---
title: "HTMLCollection과 NodeList 살펴보기"
date: "2019-03-26"
template: "post"
draft: false
path: "/posts/js-htmlcollection-nodelist"
description: "Javascript의 Element Collection인 HTMLCollection과 NodeList의 공통점, 차이점을 정리한 글입니다."
category: "Javascript"
---

`HTMLCollection`과 `NodeList`는 DOM을 조작하다보면 종종 만나게 되는 컬렉션입니다. 둘 다 배열처럼 비슷하게 생겼지만 차이점을 가지고 있습니다. 각각 제공하는 메서드나 가지고 있는 노드의 타입이 다릅니다. 각각의 특징에 대해서 정리해봤습니다.
	
## [HTMLCollection](https://developer.mozilla.org/ko/docs/Web/API/HTMLCollection)
`HTMLCollection`은 문서 내에 순서대로 정렬된 노드의 컬렉션으로, 유사 배열입니다. `HTMLCollection`을 얻을 수 있는 간단한 방법은 HTML 엘리먼트의 `children` 프로퍼티에 접근하는 것입니다.

```js
console.log(document.body.children);

> HTMLCollection(8) [script, div#react-container, script, 
div#auth-modal.modal.hidden, script, script, script, 
script, react-container: div#react-container, 
auth-modal: div#auth-modal.modal.hidden]
```

유사 배열이기 때문에, 배열에서 제공하는 모든 메서드를 가지고 있지 않습니다. 

![collection method error](../../image/2019/2019-03-26-js-htmlcollection-nodelist/collection-method-error.png)

`.forEach`나 `.map`을 사용하려고 하면 해당 메서드가 존재하지 않는다는 오류가 발생합니다. 배열 구조분나 `Array.from()`으로 `HTMLCollection`으로부터 배열을 생성해서 해당 메서드를 사용할 수 있습니다.

```js
const collection = document.body.children;

// Array Destructuring을 사용
[...collection].map(node => node.tagName);
> (8) ["SCRIPT", "DIV", "SCRIPT", "DIV", "SCRIPT", "SCRIPT", "SCRIPT", "SCRIPT"]

// Array.from()을 사용
Array.from(collection).map(node => node.tagName);
> (8) ["SCRIPT", "DIV", "SCRIPT", "DIV", "SCRIPT", "SCRIPT", "SCRIPT", "SCRIPT"]
```

### 📍 요소에 접근하기
```html
...
<body>
  <div name="myDiv"></div>
  <div name="my Div"></div>
  <div name="3"></div>
</body>
```

위 HTML 페이지에서 `document.body.children`에는 각각 정해진 이름을 가진 3개의 `<div>`가 들어있습니다. `HTMLCollection`은 배열의 인덱스로 접근할 수 있고, 객체의 속성에 접근하듯이 `.[속성명]`의 방식으로 접근할 수도 있습니다.

```js
const collection = document.body.children;

console.log(collection.myDiv);
> <div name="myDiv"></div>

console.log(collection.3);
> Uncaught SyntaxError: Unexpected number
```
`myDiv`로 이름을 정한 엘리먼트는 프로퍼티에 접근하듯이 값을 가져올 수 있지만, 숫자로 된 경우에는 불가능합니다. 두 번째 `<div>`처럼 띄어쓰기가 있는 경우는 당연히 안됩니다. 🙅🏻‍♀️ 이럴 때는 `namedItem()` 메서드를 사용할 수 있습니다.

```js
console.log(collection.namedItem("my Div"));
> <div name="my Div"></div>

console.log(collection.namedItem(3));
> <div name="3"></div>
```

인덱스로 접근할 때는 `collection[0]` 외에도 `item()` 메서드를 사용할 수 있습니다.

```js
console.log(collection.item(0));
> <div name="myDiv"></div>
```

> 문자열이 들어가면 이상한 위치의 엘리먼트를 반환합니다.

`nameItem`의 파라미터에는 `name` 애트리뷰트 뿐만 아니라 `id` 값을 이용해서도 찾아올 수 있습니다. 테스트 해 본 결과 `HTMLCollection`에 `id`와 `name` 값이 같은 서로 다른 엘리먼트가 있으면 **앞에 있는 엘리먼트를 반환**합니다. 

## [NodeList](https://developer.mozilla.org/ko/docs/Web/API/NodeList)
`element.childNodes` 프로퍼티나 `document.querySelectorAll` 메서드로 반환되는 노드의 모음입니다. `NodeList`도 유사 배열인데, `forEach` 메서드는 가지고 있습니다. 하지만 `map`, `filter` 등의 메서드를 사용하려면 위에서 언급한 방법을 이용해 배열로 바꿔주어야 합니다.

또 다른 이용 가능한 메서드에는 `entries()`, `keys()`, `values()`가 있습니다. 

### 📍 `childNodes`와 `querySelectorAll()`의 차이
`element.childNodes`와 `querySelectorAll()`은 둘 다 `￿NodeList`를 반환하지만 차이점을 가지고 있습니다. 바로 변경사항의 유무입니다.

`Node.childNodes`의 NodeList는 라이브 콜렉션으로, DOM의 변경사항을 실시간으로 반영합니다. 반면에, `document.querySelectorAll()`의 NodeList는 정적 콜렉션으로, DOM이 변경되어도 collection의 내용에는 영향을 주지 않습니다. 

```javascript
const staticNList = document.querySelectorAll('div');
const dynamicNList = document.body.childNodes;

console.log(dynamicNList);
> NodeList(33) [text, script, text, ul#nav-access, text, comment, text, header#main-header.header-main, ...]

console.log(staticNList);
> NodeList(52) [div.nav-toolbox-wrapper, div#nav-tech-submenu.submenu.js-submenu, div.submenu-column, div#nav-learn-submenu.submenu.js-submenu, ...]


// DOM 변경
const div = document.createElement('div');
document.body.appendChild(div);

console.log(dynamicNList);
> NodeList(34) [text, script, text, ul#nav-access, text, comment, text, header#main-header.header-main, ...]

console.log(staticNList);
> NodeList(52) [div.nav-toolbox-wrapper, div#nav-tech-submenu.submenu.js-submenu, div.submenu-column, div#nav-learn-submenu.submenu.js-submenu, ...]
```
