'use strict';
const ranks = {
  100: 'がんばろう',
  200: 'THE一般人',
  300: '一般にしてはよき',
  350: '駆け出しタイパー',
  400: '初心者タイパー',
  450: '中級者タイパー',
  500: '上級者タイパー',
  525: 'タイピングガチ勢',
  550: 'タイピングマスター',
  575: 'タイプ王',
  600: 'タイプ神',
  650: 'キーボード壊れますよ？'
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
