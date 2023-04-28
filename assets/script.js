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