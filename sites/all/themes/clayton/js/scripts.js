
// jQuery(document).ready(function($) {
//   $('a').click(function(e) {
//     e.preventDefault();
//     console.log(e.target);
//     var url = $(this).attr('href');
//     $.ajax({
//       type: 'POST',
//       url: '/redirect',
//       dataType: 'json',
//       success: ajaxCompleted,
//       data: 'url='+url
//     });
//   });
//
//   ajaxCompleted = function(data) {
//     console.log(data);
//     // if (data = '/which_website') {
//       // window.location.href = 'localhost:8888/which_website';
//     // } else if (data = '/') {
//       // window.location.href = 'localhost:8888';
//     // } else {
//     setTimeout(function() {
//       location.reload();
//     }, 1000);
//     // }
//   };
// });
