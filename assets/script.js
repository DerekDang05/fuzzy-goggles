// Makes sure DOM is fully loaded before running code
$(document).ready(function () {

  //function that displays the current day
  function displayCurrentDay() {
  const currentDay = dayjs();
  var currentDayFormat = currentDay.format('dddd, MMMM D');
  document.getElementById('currentDay').textContent = currentDayFormat;
  }

  //function that adds specific class depending on the time
  function addTimeClass() {
    var currentTime = dayjs().hour();
    $(".time-block").each(function () {
      var slotTime = parseInt($(this).attr("id").split("hour")[1] * -1);

      if (slotTime < currentTime) {
        $(this).addClass("past");
      } else if (slotTime === currentTime) {
        $(this).addClass("present")
      } else if (slotTime > currentTime) {
        $(this).addClass("future")
      }
    })
  }

  //gets the local storage
  function getLocalStorage() {
    for (var i=9; i<=15; i++) {
        $("#hour-" + i + " textarea").val(localStorage.getItem("hour-" + i));
    }
  }

  //click event listener that saves input value to local storage
  $(".saveBtn").on("click", function () {
    var slotText = $(this).siblings(".description").val();
    var slotHour = $(this).parent().attr("id");

    localStorage.setItem(slotHour, slotText);

  });
  //runs all the functions
    displayCurrentDay();
    addTimeClass();
    getLocalStorage();
})