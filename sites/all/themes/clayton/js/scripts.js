
jQuery(document).ready(function($) {
  $('a.candidate').click(function(e) {
    e.preventDefault();
//     console.log(e.target);
//     var url = $(this).attr('href');
//     $.ajax({
//       type: 'POST',
//       url: '/redirect',
//       dataType: 'json',
//       success: ajaxCompleted,
//       data: 'url='+url
//     });
  });

//
  ajaxCompleted = function(data) {
    console.log(data);

//     // if (data = '/which_website') {
//       // window.location.href = 'localhost:8888/which_website';
//     // } else if (data = '/') {
//       // window.location.href = 'localhost:8888';
//     // } else {
//     setTimeout(function() {
//       location.reload();
//     }, 1000);
//     // }
  };
  $('.candidate').each(function(e) {
    $(this).prepend("<button class='candidateButton' style='display:none;'>save</button>");
  });

  $('.candidate').mouseover(function() {
    $(this).children().css("display","inline");
  });

  $('.candidate').mouseout(function() {
    $(this).children().css("display","none");
  });

  $('.candidateButton').click(function(e) {
    var target = $(e.target);
    var phrase = target.parent().text();
    phrase = phrase.slice(4);
    target.parent().prepend("<div class='saved'> saved! </div>");
    target.remove();
    $('.saved').fadeOut(800, function() {
      $('.saved').remove();
    });
    send(phrase);
  });

  var send = function(phrase) {
    $.ajax({
      type: 'POST',
      url: '/save_phrase',
      dataType: 'json',
      success: ajaxCompleted,
      data: 'phrase='+phrase
    });
  };
});
