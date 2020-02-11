'use strict';

{
  let word;
  let loc; //location
  let letter;
  let miss;
  let timeLimit;
  let startTime;
  let isPlaying = false;

  const target = document.getElementById('target');
  const letterLabel = document.getElementById('letter');
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
        showResult();
        //alertの処理が終わるまで、画面描写処理をブロックする > 0.00になる前にアラートが先にでてしまうから、処理を遅らせる
      }, 100);
      target.textContent = 'クリックで再スタート';
    }

  }

  function showResult() {
    const accuracy = letter + miss === 0 ? 0 : letter / (letter + miss) * 100
    alert(`正確に${letter}文字タイプ, ${miss}ミス, 正確さ${accuracy.toFixed(2)}%`);
  }


  // プレイ開始
  document.getElementById('gamefield').addEventListener('click', () => {
    if (isPlaying) {
      return;
      //既にプレイしているときは以下を実行しない
    }
    isPlaying = true;
    timeLimit = userTimeLimit * 1000

    loc = 0;
    letter = 0;
    miss = 0;
    letterLabel.textContent = letter;
    missLabel.textContent = miss;
    word = defaultWords[Math.floor(Math.random() * defaultWords.length)];

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
        word = defaultWords[Math.floor(Math.random() * defaultWords.length)];
        loc = 0;
      }
      updateTarget();
      letter++;
      letterLabel.textContent = letter;
    } else {
      miss++;
      missLabel.textContent = miss;
    }
  });
}

