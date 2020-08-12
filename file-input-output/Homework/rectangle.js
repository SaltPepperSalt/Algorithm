function solution(n) {
  if (n > 60000) return fasle;
  const hash = new Map();
  hash.set(1, 1)
  hash.set(2, 2)
  for (let i = 1; i <= n; i++) {
    if (hash.has(i)) {
      continue;
    }
    hash.set(i, (hash.get(i - 1) + hash.get(i - 2)) % 1000000007);
  }
  const answer = hash.get(n)
  return answer;
}

console.log(solution(4));
console.log(solution(5));
console.log(solution(10));
console.log(solution(1000));
console.log(solution(6000));