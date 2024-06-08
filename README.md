# Harry Potter

## Overview

Harry Potter is a simple single page application (SPA) specifically designed to watch the Harry Potter movies and be able to track and manage the movie data you click on favorites. Built in basic HTML and JavaScript, the application uses local storage technology for data persistence, ensuring that the user's favorite data is preserved between browser sessions

### Version control

This project uses git and github for tracking changes and managing development. Please see the github repository here: https://github.com/JilingZhao/DECO2017-Web-App-Prototype-jzha0519.git.

## Features

- **Popup Display**: When the user clicks on the movie, the popup will pop out from the right side. When the mouse clicks on the blank interface in the popup window, the popup window will disappear.

- **Favorites Count**: There is a 'Favorites Movie' button that adds a movie to your favorites every time you click on it.

- **Rating Count**: There is a 'user rating' function, users can click on the number of stars to rate, each click will have a corresponding score.

- **Data persistence**: The application uses 'localStorage' to remember your favorite movies, even if you refresh the page or close and reopen the browser, the data will still be saved in the web page.

- **Edit Favorites**: The "Edit" button in the user's favorite movie will be clicked to the editing interface of the movie

- **Delete Favorites**: There is a "Delete" button, when the user clicks it, the movie will be removed from the favorites list and the related data will be deleted from the local storage.

## Setup

No setup is required.

## Usage

There are two options:
1.View the website online at the following URL: http://localhost:1234
2.Open the index.html file in your web browser to start using the application.


When the page opens, you can browse the movies about Harry Potter in this website. If you meet the Harry Potter series of favorite movies can also be collected and rated, click on the user's avatar, you can view the added movie in the collection. When users want to remove a movie from their collection, they can delete it by clicking Edit. In deleting movies, there are single and all selection functions.


## Limitations

1.This application uses localstorage for data persistence, which is limited to the specific browser and device. If you open the application in a different browser or on a different device, you will not see the same movie collection record.

2.Lack of error handling and boundary condition checking, such as parsing JSON without considering possible error cases.

## AI usage Acknowledgments

This project was initially generated with the help of chatGPT4 with the following prompts.
- How does the deleteMovie function determine which movies to delete?
- Hi, Are there any potential issues with the current implementation of the deleteMovie function? How can it be optimized?
- How does parentElement.remove() work in the context of the deleteMovie function?
- How can I trigger the deleteMovie function when a delete button is clicked?
- How can we improve the user interface to make the edit and delete functions more intuitive?
- What changes would be needed to allow users to add new movies to the list?
- How does localStorage.getItem("movies") retrieve data from the browser's local storage? . . .
