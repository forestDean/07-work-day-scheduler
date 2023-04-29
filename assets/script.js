// important DOM elements
var timeDisplayEl = $('#time-display');
var idL = $('#id');
var textBlockL = $('.textBlock');


var saveButton = $('.save');
var clearButton = $('.clear');




// Use Moment.js to format the date and assign to the declared variable.
// var m = moment();
// m = moment();
// var time = m.format('hh:mm:ss');
// $("#4a").text(time);

function clock() {
    var date = moment().format('dddd - Mo MMMM YYYY');
    var time = moment().format('hh:mm:ss a');
    $("#currentDate").text(date);
    $("#currentTime").text(time);
};

// https://www.tutorialrepublic.com/faq/how-to-loop-through-elements-with-the-same-class-in-jquery.php
// Time Highlight
function timeHighlight() {
    var hourFocus = moment().format('HH');
    //console.log(hourFocus);
    //$("body").text(hourFocus);
    //if (hourFocus === idL) {
        $(".row").each(function(){
            // Test if the div id matches hour
            if($(this).attr("id") === hourFocus ){
                //console.log("match");
               // console.log(this);
                $(this).children().eq(1).css("background", "lightyellow");
            } else if ($(this).attr("id") > hourFocus ){
                $(this).children().eq(1).css("background", "rgba(85, 107, 47, 0.1)");
            } else {
                $(this).children().eq(1).css("background", "rgba(211, 211, 211, 0.2)");
                $(this).children().eq(1).css("color", "rgba(0, 0, 0, 0.3)");
                $(this).children().eq(1).attr("contenteditable", "false");
            }
        });
    };
       


function test(event) {
    console.log("test: " + event.target);

  }

// https://stackoverflow.com/questions/2398947/jquery-how-to-get-to-a-particular-child-of-a-parent
function saveText(event) {
console.log("save: " + event.target);
console.log(this);
var textID = $(this).parent().attr("id");
console.log("textID: " + textID);
var selectText = $(this).parent().children().eq(1).text();
console.log(selectText);

localStorage.setItem(JSON.stringify(textID),JSON.stringify(selectText));

}


// https://stackoverflow.com/questions/2398947/jquery-how-to-get-to-a-particular-child-of-a-parent
function clear(event) {
console.log("clear: " + event.target);
console.log(this);
//$(this).children().eq(1).val('');
//$(this).children().eq(1).text('');
// var select = $(this).parent().children().eq(1);
// console.log(select);
/// Try DELEGATION
var select = $(this).parent().children().eq(1);
console.log(select);
$(this).parent().children().eq(1).text("");
}



// event listeners
saveButton.on('click', saveText);
clearButton.on('click', clear);


// set refresh interval
setInterval(clock, 1000);
setInterval(timeHighlight, 1000);


//example
function handleDeleteProject(event) {
    console.log(event.target);
    var btnClicked = $(event.target);
    btnClicked.parent('tr').remove();
  }

//projectDisplayEl.on('click', '.delete-project-btn', handleDeleteProject);