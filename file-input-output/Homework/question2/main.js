const fs = require('fs');
const path = require('path');

const pathDir = __dirname;

function readTestFile(fileName) {
  // 입력 Parsing
  function parseIntArray(s) {
    return s.slice(1, s.length - 1).split(',').map(el => parseInt(el));
  }

  function parseScalars(s) {
    return s.split(' ').map(el => parseInt(el));
  }

  const inputs = fs.readFileSync(fileName).toString();
  const parsedInput = parseIntArray(inputs);
  return [parsedInput]
}

function solution(num) {
  let answer = 0;
  while (num !== 1) {
    if (answer > 500) {
      answer = -1;
      break;
    }
    answer += 1;
    if (num % 2) {
      num = num * 3 + 1;
    } else {
      num = num / 2;
    }
  }
  return answer;
}

fs.readdir(pathDir, (err, files) => {
  files.forEach(file => {
    if (file.split('.')[1] !== 'txt') {
      return;
    }

    console.log(`Testing ${file}...`);
    console.log('====================================');
    console.log('Test Ouput:');

    const parsedInputs = readTestFile(path.join(pathDir, file));

    const tStart = new Date().getTime();
    let answer = solution(...parsedInputs);
    console.log(answer);
    const tDiff = new Date().getTime() - tStart;

    console.log(`${tDiff} ms ellapsed.`);
    console.log('====================================\n');
  });
});