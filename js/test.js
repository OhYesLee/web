// ctrl + option + n
console.log(1234);

//Javascript
// 사용목적 : CPU, RAM, SSD(HDD) 자원을 활용
// 변수선언 : RAM 사용 문법 : RAM 저장공간을 만들어 데이터 저장
// 데이터 타입 : RAM 효율적 사용 문법
// 연산자 : CPU 사용 문법 : 산술, 비교, 논리, 할당, 삼항
// 조건문 : 조건 따라서 다른 코드 실행
// 반복문 : 특정 코드를 반복적으로 실행
// 함수 : 중복코드를 묶어서 코드 작성 실행 > 코드 유지보수 향상
// 객체 : 식별자 1개로 여러개의 데이터 저장(컬렉션 데이터 타입) : 변수, 함수를 묶어서 코드 작성(클래스) 문법

// 식별자 1개, 데이터 1개
var data1 = 10;

// 식별자 n개, 데이터 n개
var data2 = 20,
  data3 = 30;
var data2 = 20;
data3 = 30;
// 식별자 n개, 데이터 1개
var data4 = (data5 = 40);

// console.log(data1); 식별자(변수)에 저장된 데이터 출력
console.log(data1, data2, data3, data4);

var data1 = 1.2;
var data2 = "json";
var data3 = true;
var data4 = function () {
  console.log("func");
};
var data5 = {
  key: "value",
  func: function () {
    console.log("123");
  },
};

// typeof : 데이터 타입 출력
// 동적 타이핑 : 데이터 타입을 설정하지 않아도 자동으로 데이터를 확인해서 데이터 타입 설정
console.log(
  typeof data1,
  typeof data2,
  typeof data3,
  typeof data4,
  typeof data5
);

// 업는 데이터 표현
// undefined : 변수가 선언은 되었으나 데이터가 할당되지 않음
// null : 변수가 ����이 �����으나 데이터가 �
