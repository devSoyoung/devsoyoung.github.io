---
title: "iOS <input> focus 시 자동 zoom-in 막기"
date: "2021-01-11"
template: "post"
draft: false
path: "/posts/ios-input-focus-zoom/"
description: "iOS에서 <input>에 focus를 주면 페이지가 자동으로 zoom-in 됩니다. 해당 현상을 막을 수 있는 두 가지 방법을 소개합니다."
category: "html"
---

이 글은 [Disable Auto Zoom in Input “Text” tag - Safari on iPhone
](https://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone/)를 참고해서 해결한 방법을 공유합니다.

블로그에 검색 기능을 추가하면서 `<input>`을 사용하게 되었습니다. 배포해놓고 폰에서 보니까 검색창에 포커스를 줄 때마다 줌인되어서 야심차게 넣어놓은 돋보기 회전 기능이 잘 보이지도 않네요 😞

재빠르게 버그를 고쳐봅시다.

## 언제 이런 현상이 발생하는가

보통 zoom-in은 작아서 잘 안보이는 것을 자세하게 보기 위해 사용하는 기능입니다. 이 기능 또한 `<input>`의 폰트 크기가 작아서 잘 보이지 않을 때 동작합니다.

`<input>`의 폰트 크기가 **16px 보다 작으면** focus 시 자동으로 줌인 됩니다.

## 해결방법 1: 확대 자체를 막기

페이지가 모바일 크기에 완전히 최적화되어 만들어져있다면 `<meta>` 태그를 이용해 줌을 막을 수 있습니다.

```html
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
/>
```

이제 해당 페이지 전체에서 줌을 할 수 없습니다. 덕분에 `<input>`에서의 자동 줌도 막을 수 있게 되었습니다.

하지만 아무리 모바일 화면에 맞게 잘 만들어져있다고 해도, 눈이 좀 더 나쁜 사용자는 화면을 확대하고 싶을 수 있습니다. 눈이 좋은 사용자라도 페이지에 포함된 이미지의 자세한 영역을 보고싶다면 자연스럽게 줌인을 시도하겠죠.

이럴 때 원하는대로 동작하지 않으면 "아 여기 모야.. 겁나 불편해 😡" 라고 생각할 수 있습니다.

> W3C/WAI 모바일 접근성 가이드 - [Zoom/Magnification](https://www.w3.org/TR/mobile-accessibility-mapping/#zoom-magnification)

## 해결방법 2: 폰트 크기 바꾸기

가장 좋은 방법은 폰트 크기를 자동 줌인이 발생하지 않는 최소 크기인 `16px`에 맞추는 것입니다. 장난치지 마시라고요? [장난이 아닙니다.](https://stackoverflow.com/a/7655319)

자동 줌 기능은 사용자를 불편하게 하려는 것이 아니라, 더 편하게 만들어주려는 것입니다.

16px 보다 작은 폰트 크기에서 눈이 나쁜 사용자가 사이트를 이용하기 불편하기 때문에 이런 기능이 생긴거라면, 처음부터 그 사람들이 불편하지 않게 만들어주어야 합니다.

```css
input,
textarea,
select {
    font-size: 16px;
}
```

`<input>` 말고 `<textarea>`, `<select>`에도 같은 현상이 발생하기 때문에 같이 지정해주면 좋습니다.

[포커스 되었을 때만 폰트 크기를 변경하는 방법](https://stackoverflow.com/a/13934014)이나 [모바일/데스크탑 환경에 각각 폰트 크기를 다르게 하는 방법](https://stackoverflow.com/a/26069511)도 보이네요.

해결방법 1을 제한적으로 적용해서 자동 줌이 일어나는 상황에만 [`<meta>` 태그를 추가했다가 제거하는 방법](https://stackoverflow.com/a/51214685)도 보입니다. 이 방법은 확실하게 검증된 것은 아닌듯 합니다.

## 해결방법 3: 16px로 적용하고 꼼수(scale)쓰기

Jeffery To의 [No input zoom in Safari on iPhone, the pixel perfect way](https://thingsthemselves.com/no-input-zoom-in-safari-on-iphone-the-pixel-perfect-way/)에서는 `<input>`의 폰트 크기는 16px로 적용하되, `transform: scale()`을 이용해서 원하는 폰트 크기만큼 작게 보이도록 만들라고 합니다.

최종적으로 적용하고 싶은 스타일이 아래와 같다면,

```css
input[type="text"] {
    border-radius: 5px;
    font-size: 12px;
    line-height: 20px;
    padding: 5px;
    width: 100%;
}
```

16px로 폰트 크기를 정하고 12px 크기로 보이도록 `<input>`을 축소할 것이기 때문에, 그 비율만큼 다른 요소들의 크기를 키워줍니다.

```css
input[type="text"] {
    border-radius: 6.666666667px;
    font-size: 16px;
    line-height: 26.666666667px;
    padding: 6.666666667px;
    width: 133.333333333%;
}
```

그리고 이제 계산된 스타일을 적용한 `<input>`에 `transform`으로 scale을 바꿔줍니다.

```css
input[type="text"] {
    border-radius: 6.666666667px;
    font-size: 16px;
    line-height: 26.666666667px;
    padding: 6.666666667px;
    width: 133.333333333%;

    transform: scale(0.75);
    transform-origin: left top;
}
```

`<input>`이 축소된 만큼 우측과 하단에 공백이 생기므로 이걸 채워줍니다.

```css
input[type="text"] {
    border-radius: 6.666666667px;
    font-size: 16px;
    line-height: 26.666666667px;
    padding: 6.666666667px;
    width: 133.333333333%;

    transform: scale(0.75);
    transform-origin: left top;

    /* 여기를 추가합니다. */
    margin-bottom: -10px;
    margin-right: -33.333333333%;
}
```

`<textarea>`나 `<select>`에도 적용되기 때문에 이걸 쓰고있다면 계산할게 더 많아지겠네요.

페이지 내에 있는 `<input>` 요소의 스타일이 제각각 다르다면? 🙊

## 정리

-   `<meta>` 태그로 줌을 막는다.
-   폰트 크기를 16px 이상으로 조정한다.
-   폰트 크기를 16px로 지정하고 원하는 크기로 보이도록 `transform: scale()`을 이용한다.

저는 2번 방법을 선택했습니다. 좋은 사이트는 예쁜 디자인보다 사용하기 편한 것이 더 중요하다는 것을 다시 한 번 생각하게 되네요.
