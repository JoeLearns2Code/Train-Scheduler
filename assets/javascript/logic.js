

// web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyCq5Fo3cCTxNmm5z2MTtWlu2qU2lv3L-tg",
    authDomain: "train-scheduler-1d159.firebaseapp.com",
    databaseURL: "https://train-scheduler-1d159.firebaseio.com",
    projectId: "train-scheduler-1d159",
    storageBucket: "train-scheduler-1d159.appspot.com",
    messagingSenderId: "247604083337",
    appId: "1:247604083337:web:38f175669183f37c"
  };
  

// Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  
  
  // Create a variable to reference the database.
  var database = firebase.database();
  
  
  //display current time via moment.js:

  function displayCurrentTime() {
    setInterval(function(){
        $('#current-time').html(moment().format('HH:mm'))
      }, 1000);
    }
    displayCurrentTime();


   

   



  //Button to submit new train information

  $("#submit-button").on("click", function(event) {
    event.preventDefault();

   //variables for user input

   var trainName = $("#train-name-input").val().trim();
   var destination = $("#destination-input").val().trim();
   var firstTrainTime = $("#first-train-time-input").val().trim();
   var frequency = $("#frequency-input").val().trim();

   
   //Create a local object for user input data
   
   var newTrain = {
    name: trainName,
    dest: destination,
    firstTime: firstTrainTime,
    freq: frequency,

   };
   
   //Push object to firebase

   database.ref().push(newTrain);
   
   
   //log to console for coding/debugging 

   console.log(newTrain.name);
   console.log(newTrain.dest);
   console.log(newTrain.firstTime);
   console.log(newTrain.freq);

   //notifies train has been added

   alert("Train added to the schedule");

   //clear all input boxes of text

   $("#train-name-input").val("");
   $("#destination-input").val("");
   $("#first-train-time-input").val("");
   $("#frequency-input").val("");

  });




//Firebase event for adding train information to the database and a row in the html table

database.ref().on("child_added", function(childSnapshot){
 console.log(childSnapshot.val());



//Store all inputs in variables to snapshot on firebase

var trainName = childSnapshot.val().name;
var destination = childSnapshot.val().dest;
var firstTrainTime = childSnapshot.val().firstTime;
var frequency = childSnapshot.val().freq;

//console log info

console.log(trainName);
console.log(destination);
console.log(firstTrainTime);
console.log(frequency);



//Time calculation://

//convert first train time entered to a year previous, to ensure it's not interpreted as coming after the current time.
var firstTimeConverted = moment(firstTrainTime, "HH:mm").subtract(1, "years");
  console.log(firstTimeConverted);


//variable for currentTime
var currentTime = moment();
console.log("Current Time: " + moment(currentTime).format("hh:mm"));

//difference between first train time and current time
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("Difference in Time: " +diffTime);

//calculate time remaining until next train (modulus)
var tRemain = diffTime % frequency;
console.log(tRemain);

//Minutes until train arrives
var minutesUntilTrain = frequency - tRemain;
console.log("Minutes until train " + minutesUntilTrain);

//Next train arrival
var nextTrain = moment().add(minutesUntilTrain, "minutes");

console.log("Arrival Time: " + moment(nextTrain).format("HH:mm"));



//Add a new row to the HTML table

var newRow = $("<tr>").append(
$("<td>").text(trainName),
$("<td>").text(destination),
$("<td>").text(frequency + " min"),
$("<td>").text(moment(nextTrain).format("HH:mm")),
$("<td>").text(minutesUntilTrain + " min"),

);

// Append the new row to the table body

$("#schedule > tbody").append(newRow);

//refresh page to recalculate minutes until next train arrives

setInterval("window.location.reload()", 60000);

});



