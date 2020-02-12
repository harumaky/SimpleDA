'use strict';
const ranks = {
  100: 'がんばろう',
  200: 'THE一般人',
  250: '一般人にしてはよき',
  300: '駆け出しタイパー',
  350: '初心者タイパー',
  400: '中級者タイパー',
  450: '上級者タイパー',
  500: 'タイピングガチ勢',
  525: 'タイピングマスター',
  550: 'タイプ王',
  575: 'タイプ神',
  600: 'キーボード壊れますよ？',
  700: 'エラー',
}


const judgeRank = (score) => {
  let judgedRank = 'トホホ。。';
  Object.keys(ranks).forEach(key =>{
    if (score >= key) {
      judgedRank = ranks[key];
    }
  });
  return judgedRank;
};
