// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let hourCount = [9, 10, 11, 12, 13, 14, 15, 16, 17];
for (const hour of hourCount) {
  let row = document.getElementById(hour.toString());
  const value = localStorage.getItem(hour);
  $("#" + hour)
    .find("textarea")
    .val(value);
}

$(function () {
  var now = dayjs();
  //  console.log(now)

  setInterval(function () {
    $("#currentDay").text(dayjs().format("MMM,D,YYYY h:mm:ss"));
  }, 1000);

  localStorage.getItem("");

  // variables that are defined with var statement have function scope.
  var textarea = document.querySelectorAll("textarea");

  $(".saveBtn").on("click", function () {
    const id = $(this).parent().attr("id");
    console.log(id);
    const value = $(this).parent().find("textarea").val();
    console.log(value);

    localStorage.setItem(id, value);
  });

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// let hour9am = $"#hour-9";
// let hour10am = $"#hour-10";
// let hour11am = $"#hour-11";
// let hour12pm = $"#hour-12";
// let hour1pm = $"#hour-1";
// let hour2pm = $"#hour-2";
// let hour3pm = $"#hour-3";
// let hour4pm = $"#hour-4";
// let hour5pm = $"#hour-5";
// let hourCount =[9,10,11,12,1,2,3,4,5,]
// let hourArray = [ hour9am, hour10am, hour11am, hour12pm, hour1pm, hour2pm,hour3pm, hour4pm, hour5pm, ]

// for (let i = 0; i < hourArray.length; i++){

//   if (hourCount < currentTime thenSetToPast) {

//   if (hourCount == currentTime set to present) {

//   else (set to future)
//   }
// }
