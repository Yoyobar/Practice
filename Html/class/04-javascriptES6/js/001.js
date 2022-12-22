// 아래 코드에서 alert는 실행될까요?

if ('0') {
  alert('Hello');
}

// 문자열 0이므로 실제로 값이 있는걸로 판단, 출력됨

// if..else 구조를 이용해 "자바스크립트의 ‘공식’ 이름은 무엇일까요?"라는 질문을 하는 코드를 작성해 보세요.
// 사용자가 'ECMAScript’를 입력했다면 ‘정답입니다!’, 아니라면 '모르셨나요? 정답은 ECMAScript입니다!'라는 메시지를 보여주세요.
let question = prompt("자바스크립트의 '공식' 이름은 무엇일까요?", '');
if (question === 'ECMAScript') {
  alert('정답입니다!');
} else {
  alert('모르셨나요? 정답은 ECMAScript입니다!');
}

// if..else와 프롬프트 대화상자를 사용해 사용자로부터 숫자 하나를 입력받고, 아래 조건에 따라 그 결과를 alert 창에 출력해 보세요.
// 입력받은 숫자가 0보다 큰 경우 1을 출력
// 입력받은 숫자가 0보다 작은 경우 -1을 출력
// 입력받은 숫자가 0인 경우 0을 출력

let inputNumber = prompt('숫자를 입력하세요', '');
if (inputNumber > 0) {
  alert(1);
} else if (inputNumber < 0) {
  alert(-1);
} else {
  alert(0);
}

// 조건부 연산자 '?'를 이용해 if문이 사용된 아래 코드를 변형해보세요. 동작 결과는 동일해야 합니다.

// let result;

// if (a + b < 4) {
//   result = '미만';
// } else {
//   result = '이상';
// }

let result = a + b < 4 ? '미만' : '이상';

// 조건부 연산자 '?'를 사용해 if..else문이 사용된 아래 코드를 변형해보세요. 동작 결과는 동일해야 합니다.
// 가독성을 위해 표현식을 여러 줄로 분할해 작성해 보시길 바랍니다.

// let message;

// if (login == '직원') {
//   message = '안녕하세요.';
// } else if (login == '임원') {
//   message = '환영합니다.';
// } else if (login == '') {
//   message = '로그인이 필요합니다.';
// } else {
//   message = '';
// }

let message;
login == '직원'
  ? '안녕하세요'
  : login == '임원'
  ? '환영합니다'
  : login == ''
  ? '로그인이 필요합니다.'
  : '';

// 아래 코드의 결과를 예측해 보세요.
alert(null || 2 || undefined);

//처음 오는 값이 Falsy면 True가 나올때까지 진행함, 2;

alert(alert(1) || 2 || alert(3));
//alert = undefined, 1 출력후 2;

alert(1 && null && 2);
// 첫번째 falsy인 null에서 멈춤, null;

alert(alert(1) && alert(2));
// 1, undefined 출력

alert(null || (2 && 3) || 4);
// 2 && 3 == 3;
// null || 3 || 4
// 첫번째 Truthy인 3이 출력됨.

// age(나이)가 14세 이상 90세 이하에 속하는지를 확인하는 if문을 작성하세요.
// "이상과 이하"는 age(나이) 범위에 14나 90이 포함된다는 의미입니다.
let isAge;
if (isAge > 14 && isAge < 90) {
  alert('14세 이상 90세 이하 입니다.');
} else {
  alert('14세 이상 90세 이하가 아닙니다.');
}

// age(나이)가 14세 이상 90세 이하에 속하지 않는지를 확인하는 if문을 작성하세요.
// 답안은 NOT ! 연산자를 사용한 답안과 사용하지 않은 답안 2가지를 제출해 주세요.

let age;
if (age < 14 || age > 90) {
  true;
}
false;
if (!(age >= 14 && age <= 90)) {
  true;
}
false;

// 아래 표현식에서 어떤 alert가 실행될까요?
// if(...) 안에 표현식이 있으면 어떤 일이 일어날까요?

if (-1 || 0) alert('first'); //-1, true, 'first'
if (-1 && 0) alert('second'); //false
if (null || (-1 && 1)) alert('third'); //-1 && 1 = 1  null || 1; true, 'third'

// 프롬프트(prompt) 대화상자를 이용해 간이 로그인 창을 구현해보세요.

// 사용자가 "Admin"를 입력하면 비밀번호를 물어보는 프롬프트 대화상자를 띄워주세요. 이때 아무런 입력도 하지 않거나 Esc를 누르면 "취소되었습니다."라는 메시지를 보여주세요. 틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.

// 비밀번호 확인 절차는 다음과 같습니다.

// 맞는 비밀번호 "TheMaster"를 입력했다면 "환영합니다!"라는 메시지를 보여주세요.
// 틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.
// 빈 문자열을 입력하거나 입력을 취소했다면 "취소되었습니다."라는 메시지를 보여주세요.
// 순서도는 다음과 같습니다.
const passwordSys = () => {
  let isWho = prompt('', '');

  if (isWho === 'Admin') {
    let passCheck = prompt('비밀번호', '');

    if (passCheck === '' || passCheck === null) {
      alert('취소되었습니다.');
      return;
    }

    if (passCheck === 'TheMaster') {
      alert('환영합니다!');
    } else {
      alert('인증에 실패하였습니다.');
    }
  }

  if (isWho === '' || isWho === null) {
    alert('취소되었습니다.');
    return;
  }
};

passwordSys();

// "switch"문을 사용해 작성된 아래 코드를 if..else문을 사용한 코드로 변환해 보세요.

// switch (browser) {
//   case 'Edge':
//     alert( "Edge를 사용하고 계시네요!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
//     break;

//   default:
//     alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
// }

const browser = (browser) => {
  if (browser === 'Edge') {
    alert('Edge를 사용하고 계시네요!');
    return;
  }

  if (
    browser === 'FireFox' ||
    browser === 'Chrome' ||
    browser === 'Safari' ||
    browser === 'Opera'
  ) {
    alert('저희 서비스가 지원하는 브라우저를 사용하고 계시네요');
  }
  alert('현재 페이지가 괜찮아 보이길 바랍니다!');
};

browser('Edge');

// 아래 코드를 switch문을 사용한 코드로 바꿔보세요. switch문은 하나만 사용해야 합니다.

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert('2,3');
    break;
}

//for 키이름 In 객체 : 객체의 키들을 순서대로 실행
//for 항목 of 배열명 : 배열의 항목들을 순서대로 실행

// 아래 코드를 실행했을 때 얼럿 창에 마지막으로 뜨는 값은 무엇일까요? 이유도 함께 설명해보세요.
let i = 3;
while (i) {
  alert(i--);
}

// i가 Falsy가 되면 정지되는 반복문, 3,2,1 즉 1이 출력된다.

// while 반복문이 순차적으로 실행될 때마다 얼럿 창에 어떤 값이 출력될지 예상해보세요.
// 아래 두 예시는 같은 값을 출력할까요?

// 전위형 증가 연산자를 사용한 경우(++i):

let i = 0;
while (++i < 5) alert(i);

// alert이전에 값이 증가한다, 1,2,3,4 출력
// 후위형 증가 연산자를 사용한 경우(i++):

let i = 0;
while (i++ < 5) alert(i);

// 기존값을 반환하면서 증가, 즉 1씩밀리면서 비교함, i=4일때, 5와 4를 비교하고, 이에따라 반환은 5로된다.

// for 반복문이 순차적으로 실행될 때마다 얼럿 창에 어떤 값이 출력될지 예상해보세요.
// 아래 두 예시는 같은 값을 출력할까요?

// 후위형 증가 연산자를 사용한 경우(i++):
for (let i = 0; i < 5; i++) alert(i);

// 전위형 증가 연산자를 사용한 경우(++i):
// ** for문에서 prefix suffix는 차이가없음!! 주의! 1,2,3,4가 출력된다.
for (let i = 0; i < 5; ++i) alert(i);

// for 반복문을 이용하여 2부터 10까지 숫자 중 짝수만을 출력해보세요.

for (let j = 1; j <= 10; j++) {
  j % 2 || alert(j);
}

let i = 1;
while (i < 11) {
  i % 2 || alert(i);
  i++;
}

for (let k = 1; k <= 10; k++) {
  if (!(k % 2)) alert(k);
}

// for 반복문을 while 반복문으로 바꾸되, 동작 방식에는 변화가 없도록 해보세요. 출력 결과도 동일해야 합니다.
for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}
//0,1,2;
let i = 0;
while (i < 3) {
  alert(`number ${i++}!`);
}
