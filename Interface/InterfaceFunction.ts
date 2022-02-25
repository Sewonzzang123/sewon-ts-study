// 함수와 인터페이스
// 인터페이스는 함수의 타입으로 사용할 수 있습니다.
// 이 때 함수의 인터페이스에는 타입이 선언된 파라미터 리스트와 리턴 타입을 정의합니다.
// 함수 인터페이스를 구현하는 함수는 인터페이스를 준수하여야 합니다.

//함수 인터페이스 정의
interface SquareFunc {
  (num: number): number;
}

// 함수 인터페이스를 구현하는 함수는 인터페이스를 준수하여야 합니다.
const squareFunc: SquareFunc = function (num: number) {
  return num * num;
};

console.log(squareFunc(10));
