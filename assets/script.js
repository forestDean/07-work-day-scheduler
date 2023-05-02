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
        var textID = $(this).parent().attr("id");
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
var empty=true;
function timeHighlight() { 
    var hourFocus = moment().format('HH');
        $(".row").each(function(){
            var textID = $(this).attr("id");
            var thisBlock = $(this).children().eq(1);
            // Test if the divId matches hour
            if (textID != "resetButton"){
                if (textID === hourFocus ){
                    thisBlock.addClass("present").removeClass("future");
                    // Enter notes... instruction 
                    var blockText = localStorage.getItem(JSON.stringify(textID));
                    if (blockText == null && empty) {
                        $(this).children().eq(1).text("Enter notes...")
                        empty=false;
                   }
                } else if (textID > hourFocus) {
                    thisBlock.addClass("future").removeClass("present").removeClass("past");

                } else {
                    thisBlock.addClass("past").removeClass("present").removeClass("future").attr("contenteditable", "false");
                    // Enter notes... clear
                    if (thisBlock.text() === "Enter notes..."){
                        thisBlock.empty() // this leaves "\n" which is autoSaved
                        localStorage.removeItem(JSON.stringify(textID)); // prevent autoSaved "\n"
                    }
                }
            }
        });
    };
       

// https://stackoverflow.com/questions/2398947/jquery-how-to-get-to-a-particular-child-of-a-parent
function saveText(event) {
    var textID = $(this).parent().attr("id");
    var textBlock = $(this).parent().children().eq(1);
    var selectText = textBlock.text();

    localStorage.setItem(JSON.stringify(textID),JSON.stringify(selectText));
    // saved alert
    textBlock.text("SAVED");
        setTimeout(function(){
            var blockText = localStorage.getItem(JSON.stringify(textID));
            textBlock.text(JSON.parse(blockText));
        }, 1000)       
    };

// autoSave every 2 minutes
// function autoSave() {
//     $(".textBlock").each(function(){
//         var textID = $(this).parent().attr("id");
//         var selectText = $(this).parent().children().eq(1).text();
        
//         if (selectText.length != 0) { // this reads "\n" and returns true
//             console.log(textID + selectText)
//         localStorage.setItem(JSON.stringify(textID),JSON.stringify(selectText));
//         }
//     })
// }

function clear(event) {
    var select = $(this).parent().children().eq(1);
    // $(this).parent().children().eq(1).text("");
    $(this).parent().children().eq(1).empty();
    var textID = $(this).parent().attr("id");
    localStorage.removeItem(JSON.stringify(textID));
}

function reset(event) {
    $(".textBlock").each(function(){
        //$(this).text(""); 
        $(this).empty();        
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
//setInterval(autoSave, 120000);


