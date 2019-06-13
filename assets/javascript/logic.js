

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



//Add a new row to the HTML table

var newRow = $("<tr>").append(
$("<td>").text(trainName),
$("<td>").text(destination),
$("<td>").text(frequency),
$("<td>").text(),
$("<td>").text(),

);

// Append the new row to the table body

$("#schedule > tbody").append(newRow);

});