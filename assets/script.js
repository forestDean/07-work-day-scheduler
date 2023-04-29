// important DOM elements
var timeDisplayEl = $('#time-display');
var saveButton = $('.save');
var clearButton = $('.clear');




// Use Moment.js to format the date and assign to the declared variable.
var m = moment();
m = moment();
var time = m.format('hh:mm:ss');
$("#4a").text(time);

function clock() {
    var date = moment().format('dddd - Mo MMMM YYYY');
    var time = moment().format('hh:mm:ss a');
    $("#currentDate").text(date);
    $("#currentTime").text(time);
};
// set refresh interval
setInterval(clock, 1000);

$(function () {
    $('.time-block').attr('contenteditable', 'true');
});

function test(event) {
    console.log("test: " + event.target);

  }

saveButton.on('click', test);

clearButton.on('click', test);





//example
function handleDeleteProject(event) {
    console.log(event.target);
    var btnClicked = $(event.target);
    btnClicked.parent('tr').remove();
  }

//projectDisplayEl.on('click', '.delete-project-btn', handleDeleteProject);