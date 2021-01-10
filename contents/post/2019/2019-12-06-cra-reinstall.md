---
title: "create-react-app으로 생성한 폴더에 아무것도 안 생길 때"
date: "2019-12-06"
template: "post"
draft: false
path: "/posts/cra-reinstall/"
description: "create-react-app으로 프로젝트를 생성했을 때, index.js 등의 파일이 생성되지 않는 문제의 해결방법입니다."
category: "React"
---

create-react-app으로 프로젝트를 생성하려고 하던 어느 날, 갑자기 2주 전만 해도 잘 동작하던 친구가 말을 듣지 않습니다. `index.js`도, `App.js`도, 어떤 template도 생기지 않고 오직 react, react-dom, react-scripts만 포함된 `package.json`만 생성되었습니다.

```
A template was not provided. This is likely because you're using an outdated version of create-react-app.
Please note that global installs of create-react-app are no longer supported.
```

갑자기 global로 설치한 create-react-app을 지원하지 않다니. 이유가 뭘까요. ~~지금까지 잘만 썼는데, 갑자기 왜?~~ 어쨌든 문제를 해결하려면 공식 문서를 참고해서 새로 설치해야 할 것 같습니다.

## 기존에 설치한 CRA 삭제하기

[공식문서](https://create-react-app.dev/docs/getting-started)의 Getting Started에서 권장 설치 과정을 살펴보니, npx를 이용해서 설치하라고 되어있습니다.

```
$ npx create-react-app my-app
```

npx는 최신 버전의 create-react-app을 설치할 수 있게 합니다. (아니 그렇다고 해도 왜 이전 버전을 동작도 안하게 만든거죠?) _(npx는 npm 버전 5.2 이상부터 사용이 가능합니다.)_

> npx에 대한 자세한 설명은 [‘npm 🤔npx란 무엇인가?’](https://geonlee.tistory.com/32)를 참고해주세요.

기존에 global 옵션으로 create-react-app을 설치했다면 아래 커맨드로 삭제해야 합니다.

```
$ npm uninstall -g —-save create-react-app
```

> 저는 uninstall에서 여러 번 애를 먹었는데요, `—-save` 옵션을 주고 삭제한 후 새 터미널로 실행하니까 잘 되었습니다.

그리고 새로 터미널을 띄웁니다.

## 새 버전의 CRA로 프로젝트 생성하기

그리고 나서 대망의 프로젝트 생성 커맨드를 실행해보았습니다.

```
$ npx create-react-app my-app

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...
```

**with cra-template** 문구로 보아 정상적으로 설치되는 것으로 보입니다! 프로젝트 폴더를 열어보니 템플릿과 함께 정상적으로 잘 생성되었네요 :)

```
# 생성된 프로젝트 파일 구조
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

npx 대신 npm이나 yarn으로 프로젝트를 생성하는 방법은 아래와 같습니다.

```
# npm
$ npm init react-app my-app

# yarn
$ yarn create react-app my-app
```

`npm init`는 npm 버전 6 이상부터, `yarn create`는 Yarn 버전 0.25 이상부터 사용이 가능합니다.
