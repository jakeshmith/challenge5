var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'));

$(document).ready(function() {
  $('.saveBtn').on('click', function(){
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  })

  function colorFunction() {
    var timeCurrent = dayjs().hour();
    $('.time-block').each(function() {
      var timeBlock = parseInt($(this).attr('id').split('hour') [1]);
      if (timeBlock < timeCurrent){
        $(this).removeClass('present');
        $(this).removeClass('future');
        $(this).addClass('past');
      }
      if (timeBlock === timeCurrent){
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      }
      else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    })
  };

  $('#hour-9 .description').val(localStorage.getItem("hour-9"));
  $('#hour-10 .description').val(localStorage.getItem("hour-10"));
  $('#hour-11 .description').val(localStorage.getItem("hour-11"));
  $('#hour-12 .description').val(localStorage.getItem("hour-12"));
  $('#hour-13 .description').val(localStorage.getItem("hour-13"));
  $('#hour-14 .description').val(localStorage.getItem("hour-14"));
  $('#hour-15 .description').val(localStorage.getItem("hour-15"));
  $('#hour-16 .description').val(localStorage.getItem("hour-16"));
  $('#hour-17 .description').val(localStorage.getItem("hour-17"));

  colorFunction();
});
