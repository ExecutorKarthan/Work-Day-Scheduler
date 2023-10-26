//Create a function to update the rows' data and colors
function updateRows(){
  //Create an array of all the table rows to iterate through
  var rowArray = $("#table").children();
  //Iterate through the table rows to update each one's data
  for(var index = 0; index < rowArray.length; index++){
    //Get an integer representing the current day and a process the row ID into a numeric hour
    var now = parseInt(dayjs().format("H"));
    var id = rowArray[index].getAttribute("id");
    var hour = parseInt(rowArray[index].getAttribute("id").slice(5,));
    var currentClass = $("#"+id);
    //Based on the numeric hour, strip off the old class and replace it with the correct class to reflect if that hour 
    //is in the past, future or present
    if(now > hour){
      currentClass.removeClass();
      currentClass.addClass("row time-block past");
    }
    else if (now == hour){
      currentClass.removeClass();
      currentClass.addClass("row time-block present");
    }
    else{
      currentClass.removeClass();
      currentClass.addClass("row time-block future");
    }
    //Update each row's textArea to reflect appointments from local storage
    var savedRowValues = localStorage.getItem(id);
    var textArea = $("#"+id).children()[1]
    textArea.value = savedRowValues;
  }
}

//Create a function to display the current day at the top of the scheduler
function displayCurrentDay(){
  var date = dayjs().format("dddd, MMMM D");
  var day = parseInt(dayjs().format("D"));
  var daySuffix = ""
  //Depending on the number the day ends in, determine the appropriate suffix and then update the text to reflect the day and its suffix
  if(day == 1 || day == 21 || day == 31){
    daySuffix = "st";
  }
  else if(day == 2 || day == 22){
    daySuffix = "nd";
  }
  else if(day == 3 || day ==23){
    daySuffix = "rd";
  }
  else{
    daySuffix = "th"
  }
  var currentDateHTML = $("#currentDay");
  currentDateHTML.text(date+daySuffix);
}

//Create a function that will save items in the textArea to local storage, as well as run run the other two functions continuously
$(function () {
    document.addEventListener("click", function (event) {
      //Determine the correct row based on item clicked
      var itemClicked = event.target.getAttribute("class")
      var rowID = event.target.parentElement.getAttribute("id");
      var hourRow = $("#"+rowID).children();
      var saveButton = hourRow[2].getAttribute("class")
      //If the save button was clicked, save the data into local storage
      if(itemClicked == saveButton){
        var actionItems = $(hourRow[1]).val();
        localStorage.setItem(rowID, actionItems) 
      }
      //console.log(localStorage.getItem(hourID))
    });
    //Call the updateRows function so each row can have is content and color updated
    updateRows();
    //Call the displayCurrentDay function so the current date will be at the top of the webpage
    displayCurrentDay();

});
