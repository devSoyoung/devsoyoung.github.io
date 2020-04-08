---
title: "CRA로 만든 React 프로젝트에서 eject 없이 Sass 적용하기"
date: "2020-04-08"
template: "post"
draft: false
path: "/posts/react-sass-without-eject/"
description: "CRA(create-react-app)으로 만든 React 프로젝트에서 eject를 하지 않고 Sass를 적용하는 방법을 정리한 글입니다."
category: "React"
---

대부분의 리액트 프로젝트는 create-react-app 으로 만들어집니다. CRA에는 `eject`라는 기능이 있습니다. Webpack이나 Babel 설정을 custom하게 수정하고 싶을 때 필요한 기능입니다.

![eject warning](../../image/2020/2020-04-08-react-sass-without-eject/eject-command.png)

`npm run eject` 스크립트를 실행하면 *'This action is permanent'*, 다시 되돌릴 수 없다는 문구와 함께 수행 여부를 다시 한 번 확인합니다. 꼭 필요한 경우가 아니라면 eject를 권장하지 않음을 알 수 있습니다.

> Eject 에 대한 더 자세한 내용은 [이 글](https://medium.com/curated-by-versett/dont-eject-your-create-react-app-b123c5247741)을 참고해주세요.

Sass를 적용하기 위한 방법을 찾아보니 과정 중에 `eject`가 필요했습니다. eject를 안 쓸 방법은 없는지 찾아보니 다행히도 있었습니다. 설정 과정이 무척 간단합니다.
 
## CRA 프로젝트에 Sass 적용하기 

먼저, 필요한 패키지를 설치합니다.

```
$ npm install --save node-sass
```

`.css` 파일을 `.scss`나 `.sass`로 변경한 후 실행합니다. 참 쉽죠잉?

<img src="https://1.bp.blogspot.com/-J0I5sc9fwEw/WmWQXWJL70I/AAAAAAAAs98/ZFH2q102ZUQIRzd-AB00vJDo4IZ_53c0wCLcBGAs/s1600/bobrosspainting.jpg" style="margin:auto; display:block;">

## `SASS_PATH` 설정하기
sass에서 import를 할 때, 파일의 현재 위치를 기준으로 하면 폴더 구조 깊숙한 곳의 파일에서 import 하기란 쉽지 않은 일 일겁니다. 자바스크립트 파일을 `node_modules`나 `src` 폴더를 기준으로 하듯, sass 파일의 import 기준도 설정해줍시다.

먼저, 루트 디렉토리에 `.env` 파일을 만들어줍니다. 이미 있다면 열어줍니다.

```
# .env 파일
SASS_PATH=node_modules:src
```
`:`을 기준으로 디렉토리를 구분합니다. 만약 `scss`라는 폴더도 기준으로 해주고 싶다면, `src`뒤에 `:scss`를 붙여주면 되겠습니다. 이 방법은 MAC OS 기준이고, Windows 사용자의 경우 `.env` 파일을 아래와 같이 설정해야 한다고 합니다.

```
# .env 파일
SASS_PATH=./node_modules;./src
```

`src` 폴더에 있는 `common.scss` 파일을 import 하려면 이제 다음과 같이 할 수 있습니다.

```scss
@import "common.scss";

...
```

<br/>

> 참고한 글 : https://create-react-app.dev/docs/adding-a-sass-stylesheet/