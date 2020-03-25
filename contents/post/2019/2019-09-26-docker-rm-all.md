---
title: "[Docker] 모든 컨테이너 삭제하기"
date: "2019-09-26"
template: "post"
draft: false
path: "/posts/docker-rm-all/"
description: "Docker의 모든 컨테이너를 삭제하는 명령어를 정리한 글입니다."
category: "Docker"
---

```
$ docker container rm [ContainerID] [...ContainerID]
```

위 명령어는 도커 컨테이너를 삭제하는 명령어입니다. 하지만 모든 컨테이너를 한번에 지우기 위해서 일일히 컨테이너 아이디를 입력하는 일은 너무나 번거롭습니다.

## 모든 컨테이너 한 번에 지우기
```
$ docker rm $(docker container ls -aq)
```

`$()`는 커맨드내의 커맨드를 실행해주고, 그 자리는 커맨드의 결과로 치환합니다. 

```
$ docker container ls -aq
```

`$()`에서 실행한 위의 명령어는 모든 컨테이너의 아이디를 보여줍니다. 이를 이용해서 모든 컨테이너 아이디를 쉽게 입력해서 한 번에 지울 수 있습니다.
