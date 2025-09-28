// get all needed dom elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const attendeeCountSpan = document.getElementById("attendeeCount");

// track attendance
let count = 0;
const maxCount = 50;

// handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  // do something with the form values
  console.log(name, teamName);

  // increment count
  count++;
  attendeeCountSpan.textContent = count;
  console.log("Total check-ins: ", count);

  // update progress bar
  const progressBar = document.getElementById("progressBar");
  const percentNum = Math.round((count / maxCount) * 100);
  const percentage = percentNum + "%";
  progressBar.style.width = percentage;

  // Change color as we get closer to the goal
  if (percentNum < 40) {
    progressBar.style.background = "linear-gradient(90deg, #0071c5, #00aeef)";
  } else if (percentNum < 80) {
    progressBar.style.background = "linear-gradient(90deg, #fbbf24, #f59e42)";
  } else {
    progressBar.style.background = "linear-gradient(90deg, #22c55e, #16a34a)";
  }

  // update team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  // show personalized greeting message
  const greeting = document.getElementById("greeting");
  greeting.textContent = `🎉 Welcome, ${name}! You are now checked in for ${teamName}.`;
  greeting.style.display = "block";

  form.reset();
});
