// important DOM elements
var timeDisplayEl = $('#time-display');
var idL = $('#id');
var textBlockL = $('.textBlock');
var saveButton = $('.save');
var clearButton = $('.clear');
var resetButton = $('.reset ');
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
        $(".row").each(function(){
            // Test if the divId matches hour
            if ($(this).attr("id") != "resetButton"){
                if($(this).attr("id") === hourFocus ){
                    $(this).children().eq(1).addClass("present")
                    // Enter notes... instruction
                    if (!$(this).children().eq(1).val()){
                        $(this).children().eq(1).text("Enter notes...")
                    }
                } else if ($(this).attr("id") > hourFocus) {
                    $(this).children().eq(1).addClass("future")
                } else {
                    $(this).children().eq(1).addClass("past")
                    $(this).children().eq(1).attr("contenteditable", "false");
                    // // Enter notes... clear
                    if ($(this).children().eq(1).text("Enter notes...")){
                        $(this).children().eq(1).text("")
                    }
                }
            }
        });
    };
       

// https://stackoverflow.com/questions/2398947/jquery-how-to-get-to-a-particular-child-of-a-parent
function saveText(event) {
        console.log("save: " + event.target);
    var textID = $(this).parent().attr("id");
        console.log("textID: " + textID);
    var textBlock = $(this).parent().children().eq(1);
    var selectText = textBlock.text();
        console.log(selectText);

    localStorage.setItem(JSON.stringify(textID),JSON.stringify(selectText));
    // saved alert
    textBlock.text("SAVED");
        setTimeout(function(){
            var blockText = localStorage.getItem(JSON.stringify(textID))
            textBlock.text(JSON.parse(blockText));
        }, 1000)       
    };


// autoSave every 2 minutes
function autoSave() {
    $(".textBlock").each(function(){
        var textID = $(this).parent().attr("id");
            console.log("textID: " + textID);
        var selectText = $(this).parent().children().eq(1).text();
        

        localStorage.setItem(JSON.stringify(textID),JSON.stringify(selectText));
            console.log("autoSave");
    })
}

function clear(event) {
        console.log("clear: " + event.target);
        console.log("this: " + this);

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


