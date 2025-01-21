$(function () {

  //変数の初期化
  let num = 0;

  // id属性がchange-colorの要素がクリックされたら
  $('#change-color').on('click', function() {
    console.log("change-color");
    num++;
    console.log(num);

    // 奇数回目は赤、偶数回目は黒
    if (num % 2 == 0){
      $('#target').css('color', 'black');
    }else{
      $('#target').css('color', 'red');
    }    
  });

  // id属性がchange-textの要素がクリックされたら
  $('#change-text').on('click', function() {
    console.log("change-text");
    console.log('text（変化前）:' + $('[id="target"]').text());

    // 現在のtextが「こんにちは！」か否かで分岐
    if ($('[id="target"]').text() == "こんにちは！"){
      $('#target').text('Hello!');
    }else{
      $('#target').text('こんにちは！');
    }
  });

  // id属性がfadeOutの要素がクリックされたら
  $('#fade-out').on('click', function() {
    console.log("fade-out");
    // フェードアウトする
    $('#target').fadeOut();
  });

  // id属性がfadeInの要素がクリックされたら
  $('#fade-in').on('click', function() {
    console.log("fade-In");
    // フェードインする
    $('#target').fadeIn();
  });


});