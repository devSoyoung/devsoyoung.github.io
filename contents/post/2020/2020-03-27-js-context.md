---
title: "[Basic.js] 자바스크립트의 컨텍스트(Context) 이해하기"
date: "2020-03-27"
template: "post"
draft: true
path: "/posts/js-context/"
description: "자바스크립트의 중요한 기본 개념, 컨텍스트(Context)를 공부하고 정리한 글입니다."
category: "Javascript"
---

예전에 어디에선가 '기초는 쉬운게 아니라 가장 중요한 것'이라고 했던게 문득 떠올랐습니다. 자바스크립트의 기본 개념에 대해 제대로 이해하고 있는지 점검해보고 싶었습니다. 그래서 [Basic.js]라는 prefix를 붙여서 몇 가지 주제의 글을 써보려고 합니다. 그 중 첫 번째 주제는 컨텍스트입니다.

## 실행 컨텍스트(Context)

`Context`는 문맥, 맥락이라는 뜻을 가지고 있습니다. 자바스크립트에서의 컨텍스트는 **'코드가 실행되고 있는 환경'** 을 말합니다.
