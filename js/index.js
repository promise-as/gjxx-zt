$(function () {
  jQuery("#banner").slide();
  jQuery("#campus").slide();
  jQuery("#activity").slide();

  $('.popup-show').click(function () {
    $('#popup').show();
    $('.popup-close').click(function () {
      $('#popup').hide();
    });
  });

  // 倒计时 12小时
  countdown(12);
  function countdown(h) {
    var timeId = null;
    var total = h * 3600000; // 毫秒

    //将0-9的数字前面加上0，例1变为01 
    function formatTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    countFunc(total);
    timeId = setInterval(function () {
      total = total - 1000;
      countFunc(total);
    }, 1000);

    function countFunc(leftTime) {
      if (leftTime >= 0) {
        var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时 
        var minutes = parseInt(leftTime / 1000 / 60 % 60, 10); //计算剩余的分钟 
        var seconds = parseInt(leftTime / 1000 % 60, 10); //计算剩余的秒数 
        hours = formatTime(hours);
        minutes = formatTime(minutes);
        seconds = formatTime(seconds);
        $("#h").html(hours);
        $("#m").html(minutes);
        $("#s").html(seconds);
      } else {
        clearInterval(setTimer);
        $("#h").html("00");
        $("#m").html("00");
        $("#s").html("00");
      }
    }
  }
});