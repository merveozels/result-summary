
const summaryData = [
  {
    name: 'reactionScore',
    label: 'Reaction',
    icon: 'reaction-icon.svg',
    score: 3,
  },
  {
    name: 'memoryScore',
    label: 'Memory',
    icon: 'memory-icon.svg',
    score: 9,
  },
  {
    name: 'verbalScore',
    label: 'Verbal',
    icon: 'Verbal-icon.svg',
    score: 27,
  },
  {
    name: 'visualScore',
    label: 'Visual',
    icon: 'Visual-icon.svg',
    score: 39,
  },
];

let totalScore = 0;

for (const data of summaryData) {
  if (data.name == 'reactionScore') {
    reactionTxt.innerText = data.score;
  }
  else if (data.name == 'memoryScore') {
    memoryTxt.innerText = data.score;
  }
  else if (data.name == 'verbalScore') {
    verbalTxt.innerText = data.score;
  }
  else if (data.name == 'visualScore') {
    visualTxt.innerText = data.score;
  }
  resultTxt.innerText = totalScore / 4;
}
