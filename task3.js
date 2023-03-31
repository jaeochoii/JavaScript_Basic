// 문제 3번 코드를 아래 칸에 작성해주세요.

function solution(n) {
  let num = 1;
  for (let i = 1; ; i++) {
    num = num * i;
    if (n < num) {
      return i - 1;
      break;
    }
  }
}
