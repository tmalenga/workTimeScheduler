// Define variables
//let user_data = $("textarea");
//let sibs = $("btn-9").siblings;
//let timeRange = $("div .col-2");
let displayTime = $("#currentDay");
let currentHour = dayjs().hour();
const timeSlots = document.querySelectorAll(".container-fluid > div");
console.log(timeSlots[0].id)

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
$(function () {
    // TODO: Add a listener for click events on the save button.
    $("button").click(function(){
        console.log($(this).parent().attr("id"));
        let userInput = $(this).siblings("textarea").val();
        //let timeRange = $(this).siblings("div .col-2").html();
        let timeRange = $(this).parent().attr("id");
        console.log(timeRange + "IT WORKS!! YAYAYA! - maybe but still YAYAYA");
        
        //accessing local storage to update for any input saved by the user 
        let userData = JSON.parse(localStorage.getItem("User_Data"))||{}  
        userData[timeRange] = userInput;
          // time: timeRange, 
          // taskItem: userInput       
        
        console.log(userData);  
        let userData_serialized = JSON.stringify(userData);
        localStorage.setItem("User_Data", userData_serialized);               
  
      }) 

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    function toDisplayTime(){
        let currentTime = dayjs().format("MM DD, YYYY")
        displayTime.text(currentTime);
      }
    
      toDisplayTime();


  });