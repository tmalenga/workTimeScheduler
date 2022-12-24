// Define variables
let displayTime = $("#currentDay");
let currentHour = dayjs().hour();
const timeSlots = document.querySelectorAll(".container-fluid > div");

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
$(function () {
    // TODO: Add a listener for click events on the save button.
    $("button").click(function(){
        // Use DOM traversal to get access elements and attributes in HTML
        let userInput = $(this).siblings("textarea").val();
        let timeRange = $(this).parent().attr("id");
        
        //accessing local storage to update for any input saved by the user 
        let userData = JSON.parse(localStorage.getItem("User_Data"))||{}  
        userData[timeRange] = userInput;     
        
        let userData_serialized = JSON.stringify(userData);
        localStorage.setItem("User_Data", userData_serialized);         
  
      }) 

    // TODO: Add code to apply the past, present, or future class to each time  & add code to get any user input that was saved in localStorage and set
        function checkTense(){                
            
            let previousData = JSON.parse(localStorage.getItem("User_Data"))||{}
            let arrayPreviousData = Object.entries(previousData);            
            
            for (let i = 0; i < arrayPreviousData.length; i++){                
                $(`#${arrayPreviousData[i][0]}`).children("textarea").val(arrayPreviousData[i][1]);
            }

            for (var i = 0; i < timeSlots.length;i++){
                let myId = timeSlots[i].id;
                let myhour = myId.slice(5);
                
                let newhour = parseInt(myhour);    

                if (currentHour > newhour){
                    timeSlots[i].className = "row time-block past";                    
                }
                else if(currentHour === newhour){
                    timeSlots[i].className = "row time-block present";                    
                }
                else{
                    timeSlots[i].className = "row time-block future";                    
                }
            }

        }    

    // TODO: Add code to display the current date in the header of the page.
    function toDisplayTime(){
        let currentTime = dayjs().format("MM DD, YYYY")
        displayTime.text(currentTime);
      }

      toDisplayTime();
      setInterval(toDisplayTime, 1000);
      checkTense();

  });