
jQuery(document).ready(function($) {
  $('a').click(function(e) {
    console.log(e.target);
    var url = $(this).attr('href');
    $.ajax({
      type: 'POST',
      url: '/redirect',
      dataType: 'json',
      success: ajaxCompleted,
      data: 'url='+url
    });
  });

  ajaxCompleted = function(data) {
    console.log(data);
  }
});
