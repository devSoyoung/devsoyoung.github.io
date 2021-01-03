---
title: "Javascript의 객체 복사: Shallow copy, Deep copy"
date: "2019-10-14"
template: "post"
draft: true
path: "/posts/javascript-deep-copy/"
description: "Shallow copy, Deep copy의 정의와 Javascript에서의 Deep copy 방법을 정리한 글입니다."
category: "Javascript"
---

평소에 시간이 나면 Medium에서 추천하는 글을 읽곤 하는데, 얼마 전 Javascript의 shallow copy, Deep copy에 대해 정리한 [글](https://medium.com/@gamshan001/javascript-deep-copy-for-array-and-object-97e3d4bc401a)을 읽게 되었습니다.

잘 알고 있는 개념이라 생각했는데 명확하게 설명하지 못하는 것 같아 이번 기회에 글로 정리하며 다시 한 번 생각해보게 되었습니다.

Javascript에서의 Deep copy 구현 코드가 궁금하신 분은 [여기](#deep-copy-in-javascript)부터 보시면 됩니다.

## Shallow copy와 Deep copy

객체를 복사하는 방법 두 가지가 있습니다. 변수가 참조하 객체의 정보(주소)를 복사하는 방법과 객체 내의 모든 값을 복사하여 또 다른 객체를 생성하는 방법입니다. 전자를 얕은 복사(Shallow copy), 후자를 깊은 복사(Deep copy)라고 부릅니다.

- **얕은 복사(Shallow copy)** : 변수가 가리키고 있는 객체의 정보(주소)를 복사
- **깊은 복사(Deep copy)** : 객체의 모든 값을 복사하여 새로운 객체를 생성

> Shallow copy는 Bitwise copy, Deep copy는 Memberwise copy라고 부르기도 합니다. 이에 대한 자세한 설명은 [여기](https://social.msdn.microsoft.com/Forums/vstudio/en-US/c9289b1c-c3ff-4498-a14d-4136693af7ac/shallow-copy-deep-copy-memberwise-copy-bitwise-copy?forum=vclanguage)를 참고하세요 :)

<img src="https://miro.medium.com/max/780/1*6fjXVjxrpLWB_U3Gkz51MQ.png" style="margin:auto; margin-bottom: 50px;">

얕은 복사의 경우, **새로 만든 변로 객체를 수정하면 원래 변수의 객체도 함께 변경됩니다.** 두 변수가 가리키고 있는 객체(Referenced Object)가 동일하기 때문입니다.

```js
const obj_a = { 1: "apple", 2: "banana" };
const obj_b = obj_a;

obj_b[2] = "tomato";

console.log(obj_a);
console.log(obj_b);
```

위의 코드를 수행하면 `obj_a`와 `obj_b` 모두 동일하게

```
{
    1: 'apple',
    2: 'tomato'
}
```

를 출력합니다. `obj_b`의 수정으로 `obj_a`의 값까지 변경되었다는 것을 확인할 수 있습니다.

```js
const obj_a = {};
const obj_b = obj_a;
console.log(obj_a == obj_b); // true

const obj_c = {};
console.log(obj_a == obj_c); // false
```

`obj_a`, `obj_b`, `obj_c` 새 변수를 만들고 같은지 비교해보면 `obj_a`, `obj_b`는 같다고 나오지만, `{}`로 새로운 객체를 생성한 `obj_c`는 동일하지 않다는 결과를 출력합니다.

> 자바스크립트의 객체 생성방법이 [잘 정리된 글](https://hsp1116.tistory.com/10) 입니다.

## Copy in Javascript

얕은 복사로 객체를 생성하면 원래 객체의 값을 변경하게 되므로, 두 변수가 객체를 공유하려는 것이 아니라면 **깊은 복사를 통해 새로운 객체를 생성**해야 합니다.

### Array.from(), Object.create()

Array와 Object에는 각각 새로운 배열과 객체를 생성해주는 `from()`과 `create()`라는 메소드가 있습니다.

```js
const arr1 = [1, 2, 3];
const arr2 = Array.from(arr1);

console.log(arr1 == arr2); // false
```

```js
const obj1 = { 1: "hello", 2: "world" };
const obj2 = Object.create(obj1);

console.log(obj1 == obj2); // false
```

생성된 두 객체가 서로 다르다고 했고, 수정해도 영향을 주지 않는 것을 보니 우리가 원하는 깊은 복사가 되는 것 같습니다.

```js
const obj1 = { first: { say: "Hello" }, second: { sy: "World" } };
const obj2 = Object.create(obj1);

obj2["first"]["say"] = "Bye";
console.log(obj1);
```

```
{
    first: { say: 'Bye'},
    second: { say: 'World' }
}
```

하지만 위 예제를 보면, 깊은 복사가 이루어지지 않았음을 알 수 있습니다. 객체 안에 객체가 있는 중첩된 경우 여전히 얕은복사를 합니다.

> `Object.assign()`도 `Object.create()`와 결과가 같습니다.

### ES6 Destructuring assignment

ES6(ECMA2015) 이상의 자바스크립트에서 지원하는 [구조분해할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)도 동일합니다.

```js
const arr1 = [1, 2, 3];
const arr2 = arr1;
const arr3 = [...arr1];

console.log(arr1 == arr2); // true
console.log(arr1 == arr3); // false
```

```js
const arr1 = [{ apple: "iphone" }, { samsung: "galaxy" }];
const arr2 = [...arr1];

arr2[0]["apple"] = "xphone";
console.log(arr1); // [{ apple: 'xphone'}, { samsung: 'galaxy' }]
```

중첩되어 있는 객체는 새로 생성하지 않고 포인터만 카피했기 때문에 새로 만든 변수를 이용해 값을 조작하면 원래 객체의 값도 변경됩니다.

## Deep copy in Javascript

진짜 깊은 복사를 할 수 있는 방법은 뭘까요.

### Json.stringify()

첫 번째 방법은 객체를 아예 문자로 만들어서 기존의 참조 정보를 모두 날린 뒤에 다시 객체로 바꾸어주는 것입니다.

```js
```

이 방법은 중첩된 객체 깊이와 관계 없이 간단하게 수행할 수 있지만, `stringify()` 메소드는 실행속도가 느립니다.

---

## Reference

- https://blueshw.github.io/2016/01/20/shallow-copy-deep-copy/
- https://hyunseob.github.io/2016/02/08/copy-object-in-javascript/
