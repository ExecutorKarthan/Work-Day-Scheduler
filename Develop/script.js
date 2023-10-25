function updateRows(){
  var rowArray = $("#table").children();
  for(var index = 0; index < rowArray.length; index++){
    var now = parseInt(dayjs().format("H"));
    var id = rowArray[index].getAttribute("id");
    var hour = parseInt(rowArray[index].getAttribute("id").slice(5,));
    var currentClass = $("#"+id);
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
    var savedRowValues = localStorage.getItem(id);
    var textArea = $("#"+id).children()[1]
    textArea.value = savedRowValues;
  }
}

function displayCurrentDay(){
  var date = dayjs().format("dddd, MMMM D");
  var day = parseInt(dayjs().format("D"));
  console.log(day)
  var daySuffix = ""
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

$(function () {
    document.addEventListener("click", function (event) {
      var hourID = event.target.parentElement.parentElement.getAttribute("id");
      var hourRow = $("#"+hourID).children();
      var actionItems = $(hourRow[1]).val();
      localStorage.setItem(hourID, actionItems)     
    });
    
    updateRows();

    displayCurrentDay();

});
