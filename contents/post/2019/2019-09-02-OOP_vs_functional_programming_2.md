---
title: "객체지향 프로그래밍과 함수형 프로그래밍(2)"
date: "2019-09-03"
template: "post"
draft: true
path: "/posts/oop-vs-functional-programming-2/"
description: "객체지향 프로그래밍과 함수형 프로그래밍에 대해 정리한 글입니다. 1, 2부로 나뉘어져 있으며 2부인 이 글은 함수형 프로그래밍에 대해 정리하였습니다."
category: "Programming"
---

앞의 글에서 객체지향 프로그래밍이 왜 필요한지, 객체지향 프로그래밍이 무엇인지에 대해 정리했습니다. 이번 글에서는 함수형 프로그래밍이 왜 등장했는지 무엇인지에 대해 정리해보려고 합니다.

## Before Functional Programming

함수형 프로그래밍에 대해 논하기 전에 앞서 함수에 대해 정리해봅시다. 우리가 아는 일반적인 함수는 입력에 따라 어떠한 동작을 수행해서 출력을 합니다.

### Side-Effect

```java
public int square(int x) {
  return x * x;
}
```

`x`를 입력받아서 `x * x`를 반환합니다. 하지만 함수에는 코드상에서 명시적으로 보이지 않는 입력과 출력이 있습니다.

```java
class Calculator {
  int number;

  public void plus(int x) {
    number += x;
  }
}
```

Calculator 클래스의 plus 메소드를 봅시다. number라는 변수가 사용됩니다. plus 메소드가 실행되기 전 number의 값, 실행되고 난 후의 plus 값은 함수에 명시적으로 입력되지 않았지만 함수의 실행에 연관됩니다. 이러한 암묵적인 input과 output은 바로 함수의 부작용, side-effect 입니다. 생각지 못한 결과를 가져다 줄 수 있다는 것입니다.

함수가 side-effect를 가지면 우리는 함수의 signature 만으로 함수가 무슨 동작을 하는지 정확히 알 수 없습니다. 함수의 이름을 아무리 명시적으로 지어도, 함수 내부에서 무슨 짓을 하는지 알려면 내부를 들여다보아야 합니다.

객체지향과 함수형 프로그래밍은 이러한 side-effect를 바라보는 관점에 다소 차이가 있습니다. 객체지향은 부작용을 '객체'라는 경계 내에 최대한 가두는 것이고, 함수형 프로그래밍은 "부작용을 제거"하려는 것입니다.

### Side-effect in Debugging

프로그램에 문제가 발생하여 디버깅하는 상황을 생각해봅시다.

만약 side-effect가 없는 순수 함수라면 함수에 제대로 된 입력이 들어갔는지, 원하는 출력이 나오는지 함수 자체만 고려하면 됩니다. 하지만 side-effect가 있다면 수행 과정에 영향을 주는 모든 외부 요소를 함께 고려해야 합니다. 디버깅할 때 고려해야 하는 것이 훨씬 늘어나는 것이죠.

### Side-effect in Testing

이번에는 테스트 코드를 작성하는 상황을 고려해봅시다.

## What is Functional Programming

함수형 프로그래밍은 여러 가지로 정의될 수 있겠지만, 가장 핵심은 이러한 "부수효과"를 제거하고 개발하는 방법을 말합니다.

## Why need Functional Programming

> 이 부분에 대한 더 자세한 내용은 이 글의 "왜 함수형 프로그래밍이어야 할까?"를 참고해주세요.

### 동시성 프로그래밍

최근 반도체 성능이 한계에 다다르자 CPU 회사들은 하나의 칩 성능을 높이는 대신 여러 개의 칩이 병렬적으로 동작하도록 하여 성능을 높이는 방식을 채택하고 있습니다. 이런 이유로 어플리케이션 코드는 멀티 쓰레드를 이용해 CPU 코어를 최대한 활용해야 합니다.

![dining_philisophy](https://t1.daumcdn.net/cfile/tistory/99F8983359CCF05107)

멀티쓰레드를 활용한 동시성 문제에서 가장 유명한 Deadlock, 교착상태는 스레드 간에 공유되는 데이터나 상태 값이 변경 가능(mutable)하기 때문에 주로 발생합니다.

하지만 함수형 프로그래밍에서는 사용하는 모든 데이터가 immutable(불변)하고 부수 효과를 가지고 있지 않습니다. 따라서 멀티쓰레드의 교착상태 문제가 발생하지 않습니다.

### 그 외

동시성 프로그래밍 외에도 함수형 프로그래밍은 코드를 테스트 하기 쉽고, 읽기 쉽게(시그니처만으로 )

### 고차함수

함수를 파라미터로 받거나 함수를 반환하는 함수

```js
function makeCounter(func) {
    var count = 0;
    return function() {
        count = func(count);
        return count;
    };
}
```

---

## Reference

-   [(번역) 함수형 프로그래밍이란 무엇인가?](https://medium.com/@jooyunghan/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-fab4e960d263)
-   [왜 함수형 프로그래밍이 좋을까?](http://ruaa.me/why-functional-matters/)
