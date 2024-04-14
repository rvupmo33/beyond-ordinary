let innerCursor = document.querySelector(".inner-cursor");
let outerCursors = document.querySelector(".outer-cursor");

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursors.style.left = `${x}px`;
  outerCursors.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

console.log(links);

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    innerCursor.classList.add('grow');
  });
});

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('userInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("search-items");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}










// let chatPopup = document.getElementById("chat-popup");
// let chatOpen = false;

// function toggleChat() {
//   if (!chatOpen) {
//     chatPopup.style.display = "block";
//     chatOpen = true;
//   } else {
//     chatPopup.style.display = "none";
//     chatOpen = false;
//   }
// }

// function sendMessageOnEnter(event) {
//   if (event.key === "Enter") {
//     sendMessage();
//   }
// }

// function sendMessage() {
//   let userInput = document.getElementById("user-input").value;
//   if (userInput.trim() === "") return;

//   let chatArea = document.getElementById("chat-area");
//   let newMessage = document.createElement("div");
//   newMessage.classList.add("chat-message", "user");
//   newMessage.textContent = userInput;
//   chatArea.appendChild(newMessage);
//   document.getElementById("user-input").value = "";

//   let botResponse = generateBotResponse(userInput);
//   let botMessage = document.createElement("div");
//   botMessage.classList.add("chat-message", "bot");
//   botMessage.textContent = botResponse;
//   chatArea.appendChild(botMessage);
// }

// function generateBotResponse(userInput) {
//   // Define keyword sets for different topics
//   let websiteKeywords = ["website", "about", "information"];
//   let homeKeywords = ["home", "empower", "goal"];
//   let servicesKeywords = ["services", "blogs", "courses"];
//   let coursesKeywords = ["courses", "careers", "events"];
//   let womenKeywords = ["women", "statistics"];

//   // Check for keywords in the user input and generate response accordingly
//   if (checkKeywords(userInput, websiteKeywords)) {
//     return "Our website aims to empower women by providing various resources such as blogs, courses, career opportunities, and events. Feel free to explore!";
//   } else if (checkKeywords(userInput, homeKeywords)) {
//     return "Welcome to our home page! Our goal is to empower women in various fields.";
//   } else if (checkKeywords(userInput, servicesKeywords)) {
//     return "In our services page, we offer blogs featuring recent successes of women and courses to learn various subjects.";
//   } else if (checkKeywords(userInput, coursesKeywords)) {
//     return "In our courses page, you can explore career opportunities and find events for women worldwide.";
//   } else if (checkKeywords(userInput, womenKeywords)) {
//     return "Visit our women page to discover statistics about women in different fields across countries.";
//   } else {
//     return "I'm sorry, I'm not sure how to respond to that. Could you please rephrase your question?";
//   }
// }

// function checkKeywords(input, keywords) {
//   input = input.toLowerCase();
//   for (let keyword of keywords) {
//     if (input.includes(keyword)) {
//       return true;
//     }
//   }
//   return false;
// }

// document.getElementById("user-input").addEventListener("keydown", sendMessageOnEnter);
















let chatPopup = document.getElementById("chat-popup");
let chatOpen = false;
let currentQuestionIndex = 0;
let userAnswers = [];
let surveyTriggered = false;


const questions = [
  "What are you passionate about?",
  "What are your strengths and skills?",
  "What kind of work environment do you prefer?",
  "What level of education have you completed?",
  "Do you prefer working alone or in a team?",
  "What are your long-term career goals?"
];


const careers = [
  "Based on your passion, skills, and strengths, you might enjoy a career in [Career 1].",
  "Considering your preferences, you might excel in [Career 2].",
  "Your desire for [Preference] suggests that a career in [Career 3] could be a good fit for you."
];

function toggleChat() {
  if (!chatOpen) {
    chatPopup.style.display = "block";
    chatOpen = true;
  } else {
    chatPopup.style.display = "none";
    chatOpen = false;
  }
}

function sendMessageOnEnter(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
  let userInput = document.getElementById("user-input").value.trim();
  if (userInput === "") return;

  let chatArea = document.getElementById("chat-area");
  let newMessage = document.createElement("div");
  newMessage.classList.add("chat-message", "user");
  newMessage.textContent = userInput;
  chatArea.appendChild(newMessage);
  document.getElementById("user-input").value = "";

  if (!surveyTriggered && isCareerRelated(userInput)) {
    triggerSurvey();
  } else {
    if (surveyTriggered) {
      handleSurvey(userInput, chatArea);
    } else {
      let botResponse = generateBotResponse(userInput);
      let botMessage = document.createElement("div");
      botMessage.classList.add("chat-message", "bot");
      botMessage.textContent = botResponse;
      chatArea.appendChild(botMessage);
    }
  }
}

function isCareerRelated(input) {
  let careerKeywords = ["career", "job", "profession", "work"];
  input = input.toLowerCase();
  for (let keyword of careerKeywords) {
    if (input.includes(keyword)) {
      return true;
    }
  }
  return false;
}

function triggerSurvey() {
  let chatArea = document.getElementById("chat-area");
  let botMessage = document.createElement("div");
  botMessage.classList.add("chat-message", "bot");
  botMessage.textContent = questions[currentQuestionIndex];
  chatArea.appendChild(botMessage);
  currentQuestionIndex++;
  surveyTriggered = true;
}

function handleSurvey(userInput, chatArea) {
  userAnswers.push(userInput);

  if (currentQuestionIndex < questions.length) {
    let botMessage = document.createElement("div");
    botMessage.classList.add("chat-message", "bot");
    botMessage.textContent = questions[currentQuestionIndex];
    chatArea.appendChild(botMessage);
    currentQuestionIndex++;
  } else {
    let botMessage = document.createElement("div");
    botMessage.classList.add("chat-message", "bot");
    let randomIndex = Math.floor(Math.random() * careers.length);
    let careerResponse = careers[randomIndex].replace("[Career]", "Software Engineer");
    botMessage.textContent = careerResponse;
    chatArea.appendChild(botMessage);
    currentQuestionIndex = 0;
    userAnswers = [];
    surveyTriggered = false;
  }
}

function generateBotResponse(userInput) {
  let websiteKeywords = ["website", "about", "information"];
  let homeKeywords = ["home", "empower", "goal"];
  let servicesKeywords = ["services", "blogs", "courses"];
  let coursesKeywords = ["courses", "careers", "events"];
  let womenKeywords = ["women", "statistics"];

  if (checkKeywords(userInput, websiteKeywords)) {
    return "Our website aims to empower women by providing various resources such as blogs, courses, career opportunities, and events. Feel free to explore!";
  } else if (checkKeywords(userInput, homeKeywords)) {
    return "Welcome to our home page! Our goal is to empower women in various fields.";
  } else if (checkKeywords(userInput, servicesKeywords)) {
    return "In our services page, we offer blogs featuring recent successes of women and courses to learn various subjects.";
  } else if (checkKeywords(userInput, coursesKeywords)) {
    return "In our courses page, you can explore career opportunities and find events for women worldwide.";
  } else if (checkKeywords(userInput, womenKeywords)) {
    return "Visit our women page to discover statistics about women in different fields across countries.";
  } else {
    return "I'm sorry, I'm not sure how to respond to that. Could you please rephrase your question?";
  }
}

function checkKeywords(input, keywords) {
  input = input.toLowerCase();
  for (let keyword of keywords) {
    if (input.includes(keyword)) {
      return true;
    }
  }
  return false;
}

document.getElementById("user-input").addEventListener("keydown", sendMessageOnEnter);














fetch('female-labor-force-participation-rates.csv')
  .then(response => response.text())
  .then(data => {
    // Parse CSV data
    const rows = data.trim().split('\n');
    const tableBody = document.querySelector('tbody');

    // Populate table rows
    rows.forEach(row => {
      const columns = row.split(',');
      const entity = columns[0];
      const code = columns[1];
      const year = columns[2];
      const participationRate = columns[3];
      const tableRow = `<tr><td>${entity}</td><td>${code}</td><td>${year}</td><td>${participationRate}</td></tr>`;
      tableBody.innerHTML += tableRow;
    });
  })
  .catch(error => console.error('Error fetching CSV file:', error));


