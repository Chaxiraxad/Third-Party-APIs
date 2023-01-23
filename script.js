// 1. Show the current date at the top
//      Use moment api and format today date
//      Add it to the `currentDay` element
var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(now);
var timeNow = moment().format("HH");
console.log(timeNow)
// 2. Colour code each block based on the current time
//      Create variables to target each time block
//      In the html add the data-hour which represent which hour each element is
//      Create variable for moment().format('H') (0 - 23) e.g. thisHour
//      timeblocks = $('.timeblock')
//      timeblocks.each(function() {
//          var hour = $(this).attr('data-hour');
//          Note that `hour` and `thisHour` should be an integer, to make sure it is, you can do something like
//          hour = parseInt(hour, 10)
//          thisHour = parseInt(thisHour, 10)
//
//          if (hour < thisHour) {
//              $(this).css('background-color', pastColour)
//          } else if (hour == thisHour) {
//              $(this).css('background-color', presentColour)
//          } else {
//              $(this).css('background-color', futureColour)
//          }
//      })
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
// 3. Save input to local storage
//      create variable (an array) called inputs that will store all of the input data
//      Add event listener to all save button
//          Add event.preventDefault inside the click event listener
//          Push the input value to inputs array with the format of { time: xx, input: xxx }
//              Get the input value
//              Get the hour value
//              Push to the inputs array if the hour entry not exist yet in the array
//              Replace the existing entry if the hour entry exist in the array
//          Save inputs variable to local storage
//              Stringify the inputs array
//          Show feedback message to the user (optional)
//          The feedback need to be dissappeared automatically
//
//      Example of inputs array format
//      var inputs = [{
//        time: 9,
//        input: 'Meeting',
//      },{
//        time: 10,
//        input: 'Coffee',
//      },...];
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var input = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, input);
  });
// 4. Load input from local storage when page load/refresh if there's any data in local storage
//      var localStorageInput = get data from local storage
//      check if localStorageInput exist, if it is
//          var parsedLocalStorageInput = parse localStorageInput
//          populate the inputs with the value from parsedLocalStorageInput
//          inputs.forEach(function(input) {
//              input => {
//                time: 9,
//                input: 'Meeting',
//              }
//              $('.timeblock[data-hour="' + input.time + '"] textarea').val(input.input)
//          })
//      if theres no data in local storage, do nothing
$(".saveBtn").on("click", function () {
    var usertext = $(this).siblings("textarea").val()
    var hour = $(this).parent().attr('id')

    // var value = $(this).siblings(".time-block").val();
    // var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(usertext, hour);
  });
//   $(".saveBtn").on("click", function(){
//     var usertext = $(this).siblings("textarea").val()
//     var hour = $(this).parent().attr('id')


  $("#hour-09 .time-block").val(localStorage.getItem("09"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));

// Extra, add hover effect on the save button