// 1. Show the current date at the top
var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(now);
var timeNow = moment().format("HH");
console.log(timeNow)
// 2. Colour code each block based on the current time
$(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    
    if (timeNow === timeDiv) {
      $(this).addClass("present");
    } else if (timeNow < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (timeNow > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

//  3. Save data in local storage using the save buttom
$(".saveBtn").on("click", function() {
    var input = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, input);
  });

//   4. Load input from local storage when page load/refresh
  $("#hour-09 .time-block").val(localStorage.getItem("09"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));

  // 5. clear all data
  $("#clearBtn").on("click", function() {
    $("textarea").val("");
    localStorage.clear();
  });

// Extra, add hover effect on the save button