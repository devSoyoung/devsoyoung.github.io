# Chapter 03. 코드의 구린내
```
구린 게 있으면 그 부분을 바로 잡으세요.
- 그랜마 벡(Grandma Beck), 자녀 양육 철학에 관한 토론에서 발췌
```

> 하지만 구린내가 나면 드러워서 피하는 게 사람 마음..😭

* **코드의 구린 내** : 리팩토링이 필요하다고 판단되는 ‘의심나는 상황’
* 리팩토링이 꼭 필요한 상황에 대한 정확한 기준을 제공하지는 않지만 _(사람의 직감보다 뛰어난 기준은 없다)_, 리팩토링으로 해결 될 가능성이 있는 문제가 있다는 정도를 소개합니다.

## 중복 코드 (Duplicated Code)
* 구린내의 제왕 👑
* 똑같은 코드 구조가 두 군데 이상 있을 경우, 그 부분을 하나로 통일합니다.

#### 📍 두 하위클래스에 같은 코드가 들어있는 경우
**메서드 추출 기법**을 적용해서 중복을 없앤 후, 메서드 상향 기법을 적용

#### 📍 두 하위 클래스에 비슷한 코드가 들어있는 경우
**메서드 추출 기법**을 적용해서 같은 부분과 다른 부분을 분리(경우에 따라 **템플릿 메서드 형성 기법**을 적용해야 할 수도 있음)

#### 📍 두 메서드가 알고리즘은 같고 기능은 다를 경우
두 알고리즘 중 더 간단한 것을 택해서 **알고리즘 전환 기법**을 적용

#### 📍 중복 코드가 메서드 가운데 있는 경우
**주변 메서드 추출 기법**을 적용

## 장황한 메서드 (Long Method)

## 방대한 클래스 (Large Class)

## 과다한 매개변수 (Long Parameter List)

## 수정의 산발 (Divergent Change)

## 기능의 산재 (Shotgun Surgery)

## 잘못된 소속 (Feature Envy)

## 데이터 뭉치 (Data Clumps)

## 강박적 기본 타입 사용 (Primitive Obsession)

## switch 문 (Switch Statements)

## 평행 상속 계층 (Parallel Inheritance Hierarchies)

## 직무유기 클래스 (Lazy Class)

## 막연한 범용 코드 (Speculative Generality)

## 임시 필드 (Temporary Field)

## 메세지 체인 (Message Chains)

## 과잉 중개 메서드 (Middle Man)

## 지나친 관여 (Inappropriate Intimacy)

## 인터페이스가 다른 대용 클래스 (Alternative Classes with Different Interfaces)

## 미흡한 라이브러리 클래스 (Incomplete Library Class)

## 데이터 클래스 (Data Class)

## 방치된 상속물 (Refused Bequest)

## 불필요한 주석 (Comments)
