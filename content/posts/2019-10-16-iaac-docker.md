---
title: "On-Premise와 Cloud Computing"
date: "2019-10-16"
template: "post"
draft: false
slug: "/posts/on-premise-vs-cloud-computing/"
description: "On-Premise와 Cloud Computing의 차이를 정리한 글입니다."
category: "ETC"
---

> 이 글은 경희대학교 컴퓨터공학과 이성원 교수님의 **[데이터센터 프로그래밍]** 수업을 듣고 정리한 글입니다.

## On-Premise

전통적인 Infra 구축 방식을 On-Premise라고 합니다. 사내에서만 접근이 가능한 private 데이터센터를 구축하고 독자적으로 운영하는 방식입니다.

이러한 On-Premise 방식은 초기에 장비와 프로그램 라이선스 비용 뿐만 아니라, 이후 운영을 하면서 **유지보수(업그레이드, 패치 등)에도 많은 비용**을 지불해야 합니다. 

> 수업에서는 cloud의 필요성이 중심 토픽이었기 때문에 단점을 더 많이 정리했지만, on-premise 방식도 여러 장점을 가지고 있습니다.

### Naming: Pets Model
On-Premise 방식에서는 각 서버에 애칭을 붙입니다. 소중한 서버 하나하나에 예쁜 이름을 붙여주지 않을 수 없습니다. 서버가 고장나면 열심히 고쳐서 다시 잘 동작할 수 있게 살려내야 합니다.

## Cloud Computing
하드웨어 장비를 직접 구비해서 데이터센터를 만드는 On-Premise와 달리, 클라우드 컴퓨팅은 클라우드 회사에서 구축한 데이터센터를 빌려서 사용하고, 사용한 만큼의 요금을 지불하는 방식입니다.

장비 비용, 토지 비용, 전기세 등은 필요하지 않습니다. 다만 사용료와 초기에 클라우드 컴퓨팅을 위한 구현, 커스터마이징과 사용법 교육 비용 듭니다.

### Naming: Cattle Model
클라우드 컴퓨팅에는 수 많은 서버가 있고, 각각의 서버는 그렇게 사랑스럽지 않습니다. 일만 잘하면 장땡인 일꾼 소에 불과합니다. 그래서 예쁜 이름 대신 소1, 소2 이렇게 식별할 수 있는 숫자를 부여합니다.

아프더라도 그렇게 신경쓰지 않습니다. *조금 매정하게 보이네요.* 아파도 일할 다른 소는 많기 때문에, 아픈 소가 해야 할 일을 놀고 있는 다른 소가 대신하면 그만입니다. 

이름을 대충 지어준 덕분에 **확장성이 좋습니다**. 서버의 갯수가 늘어나도 숫자를 계속 올려주면 그만이기 때문입니. 수 많은 서버의 이름을 일일히 기억하고 누가 누군지 헷갈려 할 필요도 없습니다.

## Cloud Model
클라우드 컴퓨팅은 어느 레벨까지 가상화 하는지, 어느 레벨부터 사용자가 관리하는지에 따라서 여러 가지로 나뉘어집니다.

![iaas, paas, saas](https://i2.wp.com/www.jamesserra.com/wp-content/uploads/2014/09/01-Comparison2.jpg?w=1002&ssl=1)

* Iaas(Infrastructure as a Service)
* Paas(Platform as a Service)
* Saas(Software as a Service)

위의 세 가지는 대표적인 클라우드 서비스입니다. 아래로 갈수록 관리하는 자원이 적어집니다. IaaS는 운영체제 레벨부터, PaaS는 응용프로그램과 데이터 레벨부터 사용자가 관리합니다. SaaS는 이미 준비된 응용프로그램을 사용하기만 하면 됩니다.

## Deploying at Scale
클라우드 컴퓨팅 덕분에 IT 관리자들은 수십 수천개의 장비를 이용해 deploy할 수 있습니다. 동시에, 클라우드 컴퓨팅은 새로운 문제를 만들어냅니다. 

어떻게 모든 이 장비들을 설정하고 유지할 수 있을까요? 수 많은 장비에 새로운 패치를 적용하고, 업데이트를 적용하는 것을 어떻게 해야할까요?

### How to set up infrastructure?
Infra 설정과정은 매우 수동적입니다. 

![server room](http://mblogthumb4.phinf.naver.net/20150622_259/jaemincap_1434942371724R93dk_JPEG/%BC%AD%B9%F6%2C_%C5%AC%B6%F3%C0%CC%BE%F0%C6%AE2.jpg?type=w2)

선반에 물리 장비를 설치하고 하드웨어를 설정합니다. 운영체제를 설치하고 나면 응용프로그램을 설치해줍니다.

### Drawbacks to this Process
이러한 방식에는 여러 가지 단점이 있습니다. 일단, **필요한 장비를 획득하는데 많은 시간**이 걸립니다. 장비를 구매하기 위해서 상위 부서의 허락이 필요한 경우도 있고, 그 외에도 다양한 이유로 장비 구매에는 많은 시간이 걸립니다.

그리고 **장비를 설치하는 작업을 할 수 있는 사람**이 필요합니다. Network 엔지니어나 Storage 엔지니어 등이 필요하거나 그에 상응하는 지식을 내가 쌓아야 합니다.

위에서 언급했듯이 **장비를 설치할 공간**도 필요합니다. 규모가 크다면 더 많은 공간이 필요하고, 전기세도 나가고, 냉방 시설도 갖춰야합니다. 

많은 트래픽으로 인해 수용 가능한 수준으로 **확장하는 데에도 많은 시간**이 걸립니다. 새로운 장비를 들여와서 설치하는 과정이 또 필요하고 단종 등으로 새로운 장비를 구입했다면 환경이 달라서 설치가 제대로 안되는 일이 발생할 수도 있습니다.

## IaC(Infrastructure as Code)
```
“Infrastructure as code is an approach to
managing IT infrastructure for the age of cloud,
microservices and continuous delivery.”

– Kief Morris, head of continuous delivery for ThoughtWorks Europe
```

위에서의 설치 과정을 코드화하여 누구나 어디에서든 미리 만들어 둔 코드만 실행하면 동일한 설정이 가능하게끔 하는 것이 바로 IaC입니다. 설치 환경, Dependencies, 설치 순서 등을 코드로 정의해두는 것입니다. 

* Speed and simplicity
* Configuration consistency
* Minimization of risk
* Increased efficiency in software development
* Cost savings

이를 통해 더 빠르고 간단하게 설정할 수 있고, 일관성을 유지할 수도 있습니다. 또 다양한 환경에서 발생하는 문제를 최대한 통일하여 위험을 최소화합니다. 개발에서의 효율성을 높이면서 비용을 절약할 수도 있습니다. *시간은 금이니까요.*

IaC의 대표가 바로 Docker입니다. 최근 수업을 들으면서 다양한 Docker 실습을 하고 있는데, 설치과정이 복잡한 개발환경 구축 등을 미리 설정된 Docker 이미지를 가져와서 실행하면 몇 분, 몇 초만에 해결되는 것을 경험하면서 굉장히 편리하다는 것을 느끼고 있습니다. 

개발환경 설정 뿐만이 아니라 클라우드 컴퓨팅 환경에서의 Infrastructure 설정도 Docker를 통해 여러 장비에서 동일하게 실행되는 것을 보장할 수 있습니다.
 