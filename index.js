// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    changeElement("text", "This is really cool!")
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

  function changeElement(where, what){
    location = document.getElementById(where).innerHTML = what
  }