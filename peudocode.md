# 07 Work Day Scheduler
## Acceptance Criteria
 
The app should:
* Display the current day at the top of the calender when a user opens the planner.
* Present timeblocks for standard business hours when the user scrolls down.
* Color-code each timeblock based on past, present, and future when the timeblock is viewed.
* Allow a user to enter an event when they click a timeblock
* Save the event in local storage when the save button is clicked in that timeblock.
* Persist events between refreshes of a page 

## PseudoCode

* Bootstrap 4
* jQuery
* Moment.js
* 
* install clock with moment.js
    * set on 2 lines to prevent 'shake'
* construct schedule table with bootstrap rows
    * 6am to 11pm - 18 rows
    * add `save` and `clear` icon
    * style
    * create editable text area
    * define overflow    
    * add event listeners to save/clear button
* time highlight Moment function
    * highlight current hour
    * grey out past hours
    * style hours pending
* save function for editable text area
    * render saved text to `textBlock`
    * savealert
    * autoSave every 2 minutes - no alert
* clear function for editable text area
    * clear `localStorage` by key value
* reset function for the whole scheduler
    * autoReset at midnight
* button transition styles
* media queries
