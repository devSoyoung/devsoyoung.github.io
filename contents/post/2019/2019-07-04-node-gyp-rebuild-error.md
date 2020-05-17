---
title: node-gyp rebuild 오류 해결과정
date: "2019-07-04"
template: "post"
draft: false
path: "/posts/node-gyp-rebuild-error/"
description: "scrypt를 npm으로 설치하는 과정에서 겪었던 node-gyp rebuild 오류 해결 과정을 정리한 글입니다."
category: "Error"
---

얼마 전, 새로운 회사에서 인턴을 시작하게 되었습니다. 설치, 설정 과정에서 워낙 오류가 자주 발생하는 불운한 편이라 개발환경 구축을 두려워합니다. _왜 맨날 나만 오류나고.._

## Problem
`npm install`로 필요한 라이브러리를 설치할 때 `scrypt`의 설치 과정에서 오류가 발생했습니다. `node-gyp rebuild` 명령어를 실행했을 때 두 번의 오류가 발생했습니다 :(

아래에 두 가지 에러의 종류와 각각의 해결 과정을 정리했습니다. 같은 에러로 문제를 겪는 분들께 도움이 되었으면 좋겠습니다. Mac OS 기준입니다.

### 📍 Solution Summary
```
1. Python 버전 문제 : 2.7 버전으로 다운그레이드
2. No Xcode or CLT version detected : XCode 설치
```

## 첫 번째 오류 : Python version

```
node-gyp rebuild

gyp ERR! configure error
gyp ERR! stack Error: Command failed: /Users/cutelee/anaconda3/bin/python -c import sys; print “%s.%s.%s” % sys.version_info[:3];
gyp ERR! stack   File “<string>“, line 1
gyp ERR! stack     import sys; print “%s.%s.%s” % sys.version_info[:3];
gyp ERR! stack                                ^
gyp ERR! stack SyntaxError: invalid syntax
gyp ERR! stack
gyp ERR! stack     at ChildProcess.exithandler (child_process.js:281:12)
gyp ERR! stack     at emitTwo (events.js:126:13)
gyp ERR! stack     at ChildProcess.emit (events.js:214:7)
gyp ERR! stack     at maybeClose (internal/child_process.js:915:16)
gyp ERR! stack     at Socket.stream.socket.on (internal/child_process.js:336:11)
gyp ERR! stack     at emitOne (events.js:116:13)
gyp ERR! stack     at Socket.emit (events.js:211:7)
gyp ERR! stack     at Pipe._handle.close [as _onclose] (net.js:561:12)
```

에러 메세지를 통해 python 관련 문제임을 추측했습니다. python 2.7 버전을 사용하라는 의견이 있어 해당 버전으로 변경 후 다시 설치를 시도했습니다. 이전과 다른 오류메세지를 보고 해당 문제를 해결했음을 알 수 있습니다.

[node-gyp 레파지토리](https://github.com/nodejs/node-gyp#on-macos)를 보니 3.x버전은 추천하지 않는다고 적혀있었습니다.

> **[2019-10-16]** 다시 확인해보니 해당 부분이 수정되었습니다. Python 버전 문제는 해결되었나 봅니다 :)

## 두 번째 오류 : command-line tool
```
node-gyp rebuild

(...)

No Xcode or CLT version detected!
```

Xcode나 CLT가 감지되지 않았다는 새로운 에러가 발생했습니다. 구글링 하면서 찾은 [글](https://github.com/nodejs/node-gyp/issues/773)에 이미 이 내용과 관련된 글을 읽어서 [Xcode를 설치](http://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/)하여 금방 오류를 해결할 수 있었습니다.

> **[2019-10-21]** 최근 맥에서 카탈리나로 업데이트를 하니 설치했던 xcode가 사라졌는지 다시 오류가 떴습니다. 멀쩡하던 프로젝트가 맥 업데이트 이후 실행이 안된다면 xcode 설치 여부를 먼저 확인하는 것을 추천드립니다 :)


### xcode 설치 명령어
```
$ xcode-select --install
```

이미 설치되어 있는데 말을 안들으면 삭제 후 재설치 해보시는 것을 추천드립니다. [(참고링크)](https://github.com/HomoEfficio/dev-tips/blob/master/%EB%A7%A5%EC%97%90%EC%84%9C%20Xcode%20%EC%82%AD%EC%A0%9C%20%EB%B0%8F%20%EA%B0%9C%EB%B0%9C%20%ED%99%98%EA%B2%BD%20%EB%B3%B5%EC%9B%90.md)
