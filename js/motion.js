// スクロール禁止
function no_scroll() {
  // PCでのスクロール禁止
  document.addEventListener("mousewheel", scroll_control, { passive: false });
  // スマホでのタッチ操作でのスクロール禁止
  document.addEventListener("touchmove", scroll_control, { passive: false });
}
// スクロール禁止解除
function return_scroll() {
  // PCでのスクロール禁止解除
  document.removeEventListener("mousewheel", scroll_control, { passive: false });
  // スマホでのタッチ操作でのスクロール禁止解除
  document.removeEventListener('touchmove', scroll_control, { passive: false });
}
// スクロール関連メソッド
function scroll_control(event) {
  event.preventDefault();
}


$(document).ready(function() {

  //ヘッダーからの全画面モジュール
  let isOpen = false;

  $('#setting-btn').click(function() {
    if (isOpen) {
      $('.from-top-screen').hide();
    } //既に開いてたら一度全て閉じる
    isOpen = true;
    $('#setting-screen').toggle(200);
    no_scroll();
  });

  $('#usage-btn').click(function() {
    if (isOpen) {
      $('.from-top-screen').hide();
    }
    isOpen = true;
    $('#usage-screen').toggle(200);
    no_scroll();
  });

  $('.close-btn').click(function() {
    $('.from-top-screen').hide(200);
    return_scroll();
  });
  //ヘッダーモジュール終了

  // ゲーム開始時
  $('#gamefield').click(function() {
    $('body').css('height', '100px');
    //これだとだめ！
  });

});