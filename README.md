# 07-work-day-scheduler
A simple calendar application that allows a user to save events for each hour of the day.

## Description
	
**jQuery** and **Moment.js** has been used to create a daily planner.   

It is designed to:
* Display the current day at the top of the calender when a user opens the planner.
* Present timeblocks for a working day when the user scrolls down.
* Colour-code each timeblock based on past, present, and future.
* Allow a user to enter an event when they click a timeblock.
* Save the event in local storage when the `save` button is clicked in that timeblock.
* Remove the event with a `clear` button
* Persist events between refreshes of a page.
* `AutoSave` after 2 minutes.
* `AutoReset` at the end of the day.


The **Work Day Scheduler** has been optimised for various display sizes using responsive CSS design.  

	
## Installation
	
The page is live at https://forestdean.github.io/07-work-day-scheduler/

	
## Usage
	   
This animation illustrates the usage of the **Work Day Scheduler**:     

![work-day-scheduler](./images/scheduler.gif)
	
## Credits
	
HTML contenteditable Attribute - https://www.w3schools.com/tags/att_global_contenteditable.asp    
jQuery: How to get to a particular child of a parent? - https://stackoverflow.com/questions/2398947/jquery-how-to-get-to-a-particular-child-of-a-parent    
Loop Through Elements with the Same Class - https://www.tutorialrepublic.com/faq/how-to-loop-through-elements-with-the-same-class-in-jquery.php     
Is noon 12am or 12pm? - https://www.rmg.co.uk/stories/topics/noon-12-am-or-12-pm    
Refresh by Naomi Atkinson - https://thenounproject.com/naomiatkinson/   
Save by Adam Hunter Peck - https://dribbble.com/adamhunterpeck





## License
	
**MIT** - Please refer to the LICENSE in the repository.
