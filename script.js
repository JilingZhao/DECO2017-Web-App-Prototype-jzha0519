const movies = [ // Define an array containing movie information
  {
    season: 1, // Number of seasons
    title: "Harry Potter and the Sorcerer's Stone", // Movie title
    img: "images/movie1.jpg", // Movie poster picture
    video: "videos/HP1.mp4", // Movies and videos
    duration: "152:00", // Length of the movie
    score: 7.6, // Movie rating
    introduce: //Movie introduce
      "The story follows an orphan named Harry Potter who discovers he is a wizard and is sent to study at Hogwarts School of Witchcraft and Wizardry. At Hogwarts, Harry makes friends and professors, and uncovers the secrets of his mysterious past. Together, they discover a powerful magical object known as the Philosopher's Stone, and Harry and his friends must stop it from falling into the hands of evil people.",
  },

  // The following is a repetition of the movie content information
  {
    season: 2,
    title: "Harry Potter and the Chamber of Secrets",
    img: "images/movie2.jpg",
    video: "videos/HP2.mp4",
    duration: "161:00",
    score: 7.4,
    introduce:
      "Harry Potter returns to Hogwarts School of Witchcraft and Wizardry to discover a mysterious space known as the Chamber of Secrets, which harbors terrifying creatures that could harm all non-pure-blood students. Harry, along with his friends Hermione and RON, embark on an adventure to decrypt and fight evil forces in order to keep the school and his friends safe.",
  },
  {
    season: 3,
    title: "Harry Potter and the Prisoner of Azkaban",
    img: "images/movie3.jpg",
    video: "videos/HP3.mp4",
    duration: "142:00",
    score: 7.9,
    introduce:
      "Harry learns that the dangerous fugitive Sirius Black has escaped from the wizarding prison Azkaban and may pose a threat to him. With the help of his friends Hermione and RON, Harry uncovers the secrets of Blake's true identity and past, as well as discovering more about his parents.",
  },
  {
    season: 4,
    title: "Harry Potter and the Goblet of Fire",
    img: "images/movie4.jpg",
    video: "videos/HP4.mp4",
    duration: "157:00",
    score: 7.7,
    introduce:
      "Harry Potter is accidentally chosen to take part in the dangerous Triwizard Tournament, taking on three other players in a series of challenges. As the game progresses, Harry not only has to face the threat of his life, but also uncovers the plot of Voldemort's resurrection, laying the groundwork for the subsequent magical war.",
  },
  {
    season: 5,
    title: "Harry Potter and the Order of the Phoenix",
    img: "images/movie5.jpg",
    video: "videos/HP5.mp4",
    duration: "138:00",
    score: 7.5,
    introduce:
      "Harry Potter discovers that the Ministry of Magic has denied Voldemort's return and is trying to cover it up, creating a secret organization called the Order of the Phoenix to fight against the dark forces. Meanwhile, Harry and his friends train in secret at Hogwarts in preparation for the coming Great War and end up in a fierce battle with the Death Eaters at the Ministry of Magic.",
  },
  {
    season: 6,
    title: "Harry Potter and the Half-Blood Prince",
    img: "images/movie6.jpg",
    video: "videos/HP6.mp4",
    duration: "153:00",
    score: 7.6,
    introduce:
      "Harry Potter discovers a mysterious potions textbook with useful magical techniques and gradually uncovers the identity of the Half-Blood Prince. Meanwhile, Headmaster Dumbledore and Harry explore Voldemort's past together, searching for the key to his destruction, the Horcrux, in preparation for the final showdown.",
  },
  {
    season: 7,
    title: "Harry Potter and the Deathly Hallows: Part 1",
    img: "images/movie7-1.jpg",
    video: "videos/HP7-1.mp4",
    duration: "146:00",
    score: 7.7,
    introduce:
      "Harry Potter and his friends Hermione and RON leave Hogwarts on a dangerous journey to find and destroy Lord Voldemort's Horcruxes. As they uncover more secrets, they face trials and betrayals, while Voldemort's power grows and threatens the wizarding world.",
  },
  {
    season: 7,
    title: "Harry Potter and the Deathly Hallows: Part 2",
    img: "images/movie7-2.jpg",
    video: "videos/HP7-2.mp4",
    duration: "130:00",
    score: 8.1,
    introduce:
      "Harry Potter and his friends continue to search for and destroy Voldemort's last Horcruxes, culminating in the decisive final battle at Hogwarts. Harry's final showdown with Lord Voldemort reveals the hidden truth that determines the fate of the wizarding world.",
  },
];

// Gets the data item named "movies" from the browser's local storage and parses it into a JavaScript object or array
// If there is no data item named "movies" in local storage, an empty array is used as the default value
const list = JSON.parse(localStorage.getItem("movies") || "[]");

// Function to filter movies or seasons based on an id
function filter(e, id) {
  for (let e of document.querySelectorAll(".directory div")) {  // Loop through all elements with class "directory div" and remove their class
    e.className = "";
  }
  // Set the class of the clicked target element to "selected"
  e.target.className = "selected";
  if (id) {
    // If an id is provided, hide all elements with the class "movie"
    for (let e of document.querySelectorAll(".movie")) {
      e.style.display = "none";
    }
    // Display elements with the class "season" followed by the id
    for (let e of document.querySelectorAll(".season" + id)) {
      e.style.display = "";
    }
  } else {
    // If no id is provided, display all elements with the class "movie"
    for (let e of document.querySelectorAll(".movie")) {
      e.style.display = "";
    }
  }
}

// Function to display movie details in a popup
function choiceMovie(id) {
  console.log(movies[id]); // Log the selected movie's details to the console
  document.querySelector(".popup").style.display = "block"; // Display the popup
  document.querySelector(".my").style.display = "none"; // Hide the "my" section
  document.querySelector(".movieDetail").style.display = "block";  // Display the movie detail section
  selectFilm();  // Select the film tab in the popup
  document.querySelector(".popup video").src = movies[id].video; // Set the video source in the popup to the selected movie's video
  document.querySelector(".film .title").innerText = movies[id].title; // Set the video source in the popup to the selected movie's video
  document.querySelector(".film .score").innerText = movies[id].score; // Set the score of the film in the popup to the selected movie's score
  document.querySelector(".rating .score").innerText = movies[id].score; // Set the score in the rating section of the popup to the selected movie's score
  document.querySelector(".myRating .star").style.width = // Adjust the width of the star rating bar based on the selected movie's score
    movies[id].score * 10 + "%";
  document.querySelector(".film .duration").innerText = // Set the duration of the film in the popup to the selected movie's duration
    movies[id].duration;
  document.querySelector(".film .introduce").innerText =  // Set the introduction text in the popup to the selected movie's introduction
    movies[id].introduce;
}

// Function to hide the popup
function hidePopup() {
  document.querySelector(".popup").style.display = "none";
}

// Function to select the film tab in the popup
function selectFilm() {
  document.querySelector("#ratingButton").className = "none";  // Set the class of the rating button to "none"
  document.querySelector("#filmButton").className = "selected";  // Set the class of the film button to "selected"
  document.querySelector(".rating").style.display = "none";  // Hide the rating section
  document.querySelector(".film").style.display = "block";  // Display the film section
}

// Function to select the rating tab in the popup
function selectRating() {
  document.querySelector("#filmButton").className = "none"; // Set the class of the film button to "none"
  document.querySelector("#ratingButton").className = "selected"; // Set the class of the rating button to "selected"
  document.querySelector(".film").style.display = "none"; // Hide the film section
  document.querySelector(".rating").style.display = "block"; // Display the rating section
}

// Function to add the currently displayed film to the list
function addFilm() {
  for (const movie of movies) { // Iterate over each movie in the movies array
    // Log the title of the film currently displayed and the title of the current movie in the loop
    console.log(
      document.querySelector(".film .title").innerText,
      movie.title
    );
    // Check if the title of the movie in the loop matches the title of the film currently displayed
    if (movie.title == document.querySelector(".film .title").innerText) {
      // Iterate over each movie in the list to check for duplicates
      for (const saveMovie of list) {
        // If the movie is already in the list, exit the function
        if (saveMovie.title == movie.title) {
          return;
        }
      }
      list.push(movie); // If the movie is not in the list, add it to the list
      console.log(list);  // Log the updated list
      localStorage.setItem("movies", JSON.stringify(list)); // Save the updated list to localStorage
    }
  }
}

// Function to display the user's saved movie collection
function viewMy() {
  document.querySelector(".popup").style.display = "block";  // Show the popup
  document.querySelector(".movieDetail").style.display = "none";   // Hide the movie detail section
  document.querySelector(".my").style.display = "block"; // Show the "my" section
  document.querySelector(".my .collections").innerHTML = ""; // Clear the contents of the collections element
  
  // Iterate over each movie in the list
  for (const movie of list) { 
    // Add the movie details to the collections element
    document.querySelector(".my .collections").innerHTML +=
      '<div class="movie"><img class="movieImg" src="' +
      movie.img +
      '"><span class="name">' +
      movie.title +
      '</span><span class="time">' +
      movie.duration +
      '</span><input name="movies" type="checkbox" value="' +
      movie.title +
      '"></div>';
  }
}

// Function to check all checkboxes in the collections element
function checkAll() {
  var checklist = document.getElementsByName("movies");
  // Iterate over each checkbox and set it to checked
  for (var i = 0; i < checklist.length; i++) {
    checklist[i].checked = true;
  }
}

// Function to delete selected movies from the list
function deleteMovie() {
  var checklist = document.getElementsByName("movies");
  // Iterate over each checkbox
  for (var i = 0; i < checklist.length; i++) {
    if (checklist[i].checked) { // Iterate over each checkbox
      // Iterate over the list to find the movie to delete
      for (var ii = 0; ii < list.length; )
        // If the movie title matches the checkbox value, remove the movie from the list and the DOM
        if (list[ii].title == checklist[i].value) {
          list.splice(ii, 1);
          checklist[i].parentElement.remove();
        } else {
          ii++;
        }
    }
  }
  localStorage.setItem("movies", JSON.stringify(list)); // If the movie title matches the checkbox value, remove the movie from the list and the DOM
}

// Function to enter edit mode
function edit() {
  document.querySelector(".my .text").innerText = "Select Content";  // Change the text to indicate selection mode
  document.querySelector(".edit-button").style.display = "none";  // Hide the edit button
  document.querySelector(".my .buttons").style.display = "block";  // Show the edit buttons

  var checklist = document.getElementsByName("movies");
  for (var i = 0; i < checklist.length; i++) {  // Iterate over each checkbox and make it visible
    checklist[i].style.display = "inline-block";
  }
}

// Function to cancel edit mode
function cancel() {
  document.querySelector(".my .text").innerText = "Collections"; // Change the text back to the default
  document.querySelector(".my .buttons").style.display = "none"; // Hide the edit buttons
  document.querySelector(".edit-button").style.display = "block";  // Show the edit button
 
  var checklist = document.getElementsByName("movies");
  for (var i = 0; i < checklist.length; i++) {  // Iterate over each checkbox and hide it
    checklist[i].style.display = "none";
  }
}

// Function to set the score based on user interaction
function setScore(event) {
  // Calculate the score based on the position of the click
  const score = Math.ceil(
    (event.offsetX / event.target.clientWidth) * 10
  );

  // Display the calculated score
  document.querySelector(".rating .score").innerText = score;
   // The width of the star rating bar based on the score
  event.target.querySelector(".star").style.width = score * 10 + "%";
}

// Function to set the height of the movies section on window load
window.onload = function () {
  document.querySelector(".movies").style.height =
    innerHeight - document.querySelector(".movies").offsetTop + "px";
};
