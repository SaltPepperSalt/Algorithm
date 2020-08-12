function solution(p) {
  const answer = '';
  let u = '';
  const reFac = (p) => {
    let open = 0;
    let close = 0;
    for (let i = 0; i < p.length; i++) {
      if (p[i] === '(') open++;
      else if (p[i] === ')') close++;
      if (open === close) {
        u = p.slice(0, i + 1);
        p.replace(u, '');
        break;
      }
    }
  }
  reFac(p);
  if (u[0] !== '(' && u[u.length - 1] !== ')') {

    u[0] = '(';
    u[u.length - 1] = ')';
    u = ')(';
    u = u.slice(1, u.length - 1)
    console.log(u)

  }

  return answer;
}

console.log(solution('(()())()'));
console.log(solution(')('));
console.log(solution('()))((()'));