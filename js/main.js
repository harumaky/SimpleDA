'use strict';

{
  const words = [
    'apple',
    'sky',
    'blue',
    'middle',
    'set'
  ];
  let word;
  let loc; //location
  let score;
  let miss;
  const timeLimit = 3 * 1000; //ms
  let startTime;
  let isPlaying = false;

  const target = document.getElementById('target');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');
  const timerLabel = document.getElementById('timer');


  function updateTarget() {
    let placeholder = '';

    //0~2文字目の個数（３つ）分だけアンダーバーをつくる
    for (let i = 0; i < loc; i++) {
      placeholder += '_';
    }
    target.textContent = placeholder + word.substring(loc);
    // 部分文字列を取得するsubstringで、3番目から最後までを表示する
  }
  function updateTimer() {
    const timeLeft = startTime + timeLimit - Date.now();
    timerLabel.textContent = (timeLeft / 1000).toFixed(2);
    const timeoutId = setTimeout(() => {
      updateTimer();
    }, 10);

    //時間切れでプレイ停止
    if (timeLeft < 0) { //timeLeftはms!
      isPlaying = false; // 再スタートを有効にする
      clearTimeout(timeoutId);
      timerLabel.textContent = '0.00';
      setTimeout(() => {
        // alert('Game Over');
        showResult();
        //alertの処理が終わるまで、画面描写処理をブロックする > 0.00になる前にアラートが先にでてしまうから、処理を遅らせる
      }, 100);
      target.textContent = 'click to replay';
    }

  }

  function showResult() {
    const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100
    alert(`${score} letters, ${miss} misses, ${accuracy.toFixed(2)}% accuracy!`);
  }


  // プレイ開始
  window.addEventListener('click', () => {
    if (isPlaying) {
      return;
      //既にプレイしているときは以下を実行しない
    }
    isPlaying = true;

    loc = 0;
    score = 0;
    miss = 0;
    scoreLabel.textContent = score;
    missLabel.textContent = miss;
    word = words[Math.floor(Math.random() * words.length)];

    target.textContent = word;
    startTime = Date.now();
    updateTimer();
  });


  //プレイ中
  window.addEventListener('keydown', e => {
    if (!(isPlaying)) {
      return;
    }
    console.log(e.key);
    if (e.key === word[loc]) {

      //例えば、0文字目からスタートで2文字目を正解したら、現在位置を3にする
      loc++;
      if (loc === word.length) {
        word = words[Math.floor(Math.random() * words.length)];
        loc = 0;
      }
      updateTarget();
      score++;
      scoreLabel.textContent = score;
    } else {
      miss++;
      missLabel.textContent = miss;
    }
  });

}