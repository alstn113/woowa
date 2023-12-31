# Requirements

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 random 값을 구한 후 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러명일 경우 ,를 이용하여 구분한다.

## 자동차

- 자동차는 전진 또는 멈출 수 있어야 한다.
- 자동차는 이름을 가질 수 있어야 한다.
- 자동차의 이름은 5자 이하여야 한다.
- 자동차는 0에서 9사이에서 무작위 값을 내었을 때 4이상인 경우에 전진하여야 한다.

## 경주

- 경주를 시작하고 종료할 수 있어야 한다.
- 경주 시작 후 특정 횟수만큼 자동차를 전진시킨다.
- 경주가 종료된 후 가장 앞에 있는 자동차들이 우승자이다.

## 입력

- 자동차 목록 입력
- 시도할 횟수 입력
- 각 입력에 대해서는 타입 검증 후 도메인 로직에 넘겨주기

## 출력

- 결과 값을 전달 받아 요구사항의 포맷대로 출력
  ```
  pobi : ---
  crong : --
  honux : ---
  ```
- 경주 진행하면서 자동차들이 이동할 때마다 출력
- 경주 종료 후 우승한 자동차들을 출력
