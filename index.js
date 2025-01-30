// Function to show Love Message
function showMessage() {
    document.getElementById("message-box").style.display = "block";
  }
  
  // Function to calculate Love Compatibility
  function calculateLove() {
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
    var compatibilityScore = Math.floor(Math.random() * 100) + 1;
    document.getElementById('compatibility').innerText = name1 + " & " + name2 + " Compatibility: " + compatibilityScore + "%";
  }
  
  // Function to show Star Map
  function showStarMap() {
    document.getElementById("star-map-container").style.display = "block";
  }
  
  // Love Reminder - Simple Random Daily Quote
  window.onload = function() {
    var reminders = [
      "You are my sunshine on a cloudy day ☀️.",
      "Every day with you is a gift 🎁.",
      "I love you more than words can say ❤️.",
      "You complete me, and I am grateful for you every day 🌸."
    ];
    var randomReminder = reminders[Math.floor(Math.random() * reminders.length)];
    document.getElementById("reminder-text").innerText = randomReminder;
  };
  
  // Slideshow Functionality
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
  }
  