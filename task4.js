// 문제 4번 코드를 아래 칸에 작성해주세요.

function solution(M, N) {
  let cnt;
  if (N >= M) {
    cnt = M - 1 + (N - 1) * M;
  } else if (M > N) {
    cnt = N - 1 + (M - 1) * N;
  }
  return cnt;
}
