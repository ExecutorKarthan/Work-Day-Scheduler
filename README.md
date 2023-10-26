# Live Project

![Alt text](<>)
<a href="">Video Demo </a>

# Description
This is a workday scheduler that keeps track of events occurring during the user's work day, specially between the hours of 9am and 5pm. This project was an excellent learning experience in DOM navigation, JQuery, and creating JQuery functions. I utilized ".getAttribute()" to select classes and ID values. This allowed me to easily locate the elements that needed to be updated, then update them from local storage. 
I used dayjs to get the current day and that information allowed me to do two things. Firstly, I used the current day data to show the user the current day of the week. Secondly, I used the current time to adjust the color of each appointment slot. 

# Installation and Running
N/A

# How to Use this Project
This scheduler allows the user to keep track of their appointments and events by entering what tasks they need to do into the text area that corresponds to the time the event is occurring. Once the values are entered into their corresponding text areas, the user can click the save button to store the data in the browser's local storage. The save button allows the data to persist between webpage refreshes as well as between opening and closing fo the browsers. Depending on what time of day it is, each time slot will be a different color: red means the block is currently happening (present), gray means the block has already happened (past), and green means the block is yet to occur (future).

# Credits
My code was built using the following code as starer code:
https://github.com/coding-boot-camp/crispy-octo-meme

I extensively developed the script.js file by creating all the functions needed to make the webpage operate as requested. 

# License
This project has an MIT license