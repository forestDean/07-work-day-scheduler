// important DOM elements
var timeDisplayEl = $('#time-display');
var idL = $('#id');
var textBlockL = $('.textBlock');
var saveButton = $('.save');
var clearButton = $('.clear');
var resetButton = $('#');
var selectText;

// render localStorage to page
$( document ).ready(function() {
    $(".textBlock").each(function(){
        var textID = $(this).parent().attr("id");;
        var blockText = localStorage.getItem(JSON.stringify(textID));
        if (blockText != null) {
        $(this).text(JSON.parse(blockText));
        }
    }
    );
});


// Use Moment.js to format the date
function clock() {
    var date = moment().format('dddd - Mo MMMM YYYY');
    var time = moment().format('hh:mm:ss a');
    $("#currentDate").text(date);
    $("#currentTime").text(time);

    // Reset the Scheduler at midnight
    var midnight = moment().format('H');
    if (midnight === 0) {
        reset();
    }
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
                $(this).children().eq(1).addClass("present")
                //console.log("match");
               // console.log(this);
                //$(this).children().eq(1).css("background", "lightyellow");
            } else if ($(this).attr("id") > hourFocus ){
                $(this).children().eq(1).addClass("future")
                //$(this).children().eq(1).css("background", "rgba(85, 107, 47, 0.1)");
            } else {
                $(this).children().eq(1).addClass("past")
                //$(this).children().eq(1).css("background", "rgba(211, 211, 211, 0.2)");
                //$(this).children().eq(1).css("color", "rgba(0, 0, 0, 0.3)");
                $(this).children().eq(1).attr("contenteditable", "false");
            }
        });
    };
       

// https://stackoverflow.com/questions/2398947/jquery-how-to-get-to-a-particular-child-of-a-parent
function saveText(event) {
    console.log("save: " + event.target);
    //console.log(this);
    var textID = $(this).parent().attr("id");
    console.log("textID: " + textID);
    var selectText = $(this).parent().children().eq(1).text();
    console.log(selectText);

    localStorage.setItem(JSON.stringify(textID),JSON.stringify(selectText));
    // SAVED ALERT
}

// autoSave every 2 minutes
function autoSave() {
    $(".textBlock").each(function(){
        var textID = $(this).parent().attr("id");
        console.log("textID: " + textID);
        var selectText = $(this).parent().children().eq(1).text();
        

        localStorage.setItem(JSON.stringify(textID),JSON.stringify(selectText));
        console.log("autoSave");
    }
}


// https://stackoverflow.com/questions/2398947/jquery-how-to-get-to-a-particular-child-of-a-parent
function clear(event) {
    console.log("clear: " + event.target);
    console.log("this: " + this);
    /// Try DELEGATION
    var select = $(this).parent().children().eq(1);
    console.log("select: " + select);
    $(this).parent().children().eq(1).text("");
    console.log("this: " + this);
    var textID = $(this).parent().attr("id");
    localStorage.removeItem(JSON.stringify(textID));
}

function reset(event) {
    $(".textBlock").each(function(){
        $(this).text("");       
    });
    localStorage.clear();
}

// event listeners
saveButton.on('click', saveText);
clearButton.on('click', clear);
resetButton.on('click', reset);


// set refresh interval
setInterval(clock, 1000);
setInterval(timeHighlight, 1000);
setInterval(autoSave, 120000);


