# TWEB: Labo 02 - Open Audit


## Introduction

This project is part of the TWEB course taught at HEIG-VD by professor Olivier Liechti. At this point, no functionalites have been implemented yet but the goal of this repostitory is to describe what will be done. Therefore, a brief description of coming soon functionalities can be found here. Moreover, urls of our web application in addition with short explanations of the transitions between screens are provided.

## Landing page

Our landing page can be found on the following link:
[https://michaelrohrer.github.io/OpenAudit/](https://michaelrohrer.github.io/OpenAudit/)

## Web Application

Our web app can be found on the following link:
[https://safe-citadel-55958.herokuapp.com](https://safe-citadel-55958.herokuapp.com)

Note that this web app is only a Mockup which purpose is to guide the reader through the different transitions between screens while reading the "Description" section.

## Sitemap

Login page: [https://safe-citadel-55958.herokuapp.com/#!/login](https://safe-citadel-55958.herokuapp.com/#!/login)

Register page: [https://safe-citadel-55958.herokuapp.com/#!/register](https://safe-citadel-55958.herokuapp.com/#!/register)

Create Manage Rooms page: [https://safe-citadel-55958.herokuapp.com/#!/managerooms](https://safe-citadel-55958.herokuapp.com/#!/managerooms)

Poll Admin page: [https://safe-citadel-55958.herokuapp.com/#!/adminpoll](https://safe-citadel-55958.herokuapp.com/#!/adminpoll)

Join Follow Rooms page:[https://safe-citadel-55958.herokuapp.com/#!/watchrooms](https://safe-citadel-55958.herokuapp.com/#!/watchrooms)

Poll Active page:[https://safe-citadel-55958.herokuapp.com/#!/activepoll](https://safe-citadel-55958.herokuapp.com/#!/activepoll)

Poll Passive page:[https://safe-citadel-55958.herokuapp.com/#!/passivepoll](https://safe-citadel-55958.herokuapp.com/#!/passivepoll)

## Description

This web application will be based on simple Interactive polls that can be found all over the internet. It is deployed on Heroku but its landing page on GitHub pages.

For the moment, the login page is used like a home page. Every user must first [register](https://safe-citadel-55958.herokuapp.com/#!/register) and then proceed to his [authentication](https://safe-citadel-55958.herokuapp.com/#!/login).

In the top right menu, a user can click on [Create Manage Rooms](https://safe-citadel-55958.herokuapp.com/#!/managerooms). Here, if he clicks on the "new room" button, he will be able to create a room, which will then contain the interaction between the questions he would like to ask and the auditors. Once the room's name is entered, if the "create" button is pressed, the user will be redirected into the [Poll Admin](https://safe-citadel-55958.herokuapp.com/#!/adminpoll) page where he can create multiple choice questions. Every time that the "submit" bouton is pressed, the question will be send to the corresponding room, where the auditors will see it and will be able to answer it. 

Besides the possibility to create a new room in the [Create Manage Rooms](https://safe-citadel-55958.herokuapp.com/#!/managerooms) page, Note that all the previously created room from that user are displayed here. For each room, a user has the choice to open, close or delete it. The close button allowed a user to close a room, which means that this room will no longer be in the [Join Follow Rooms](https://safe-citadel-55958.herokuapp.com/#!/watchrooms) page. On the contrary, the open button will bring back the room to the available list, and the user will be redirected to the [Poll Admin](https://safe-citadel-55958.herokuapp.com/#!/adminpoll) page where he will be able to manage the questions. Finally, a room will be permanently deleted if the "delete" button is pressed.

All the open rooms will be available inside the [Join Follow Rooms](https://safe-citadel-55958.herokuapp.com/#!/watchrooms) page. From there, a user can simply join a room, if he clicks on the corresponding button, and he will be redirected inside the [activepoll](https://safe-citadel-55958.herokuapp.com/#!/activepoll) page. Once a user is inside a room, he will be able to vote on the questions asked by the room's owner. Only the room creator will be able to ask questions. The other users will only be allowed to vote. After each vote, live statistics will be displayed on pie charts.

Besides the possibility to join a room, a user may simply follow a room, using the corresponding button inside the [Join Follow Rooms](https://safe-citadel-55958.herokuapp.com/#!/watchrooms) page. He will then be redirected inside the [passivepoll](https://safe-citadel-55958.herokuapp.com/#!/passivepoll) page, where he will be able to follow the active poll but without any possibilities to answer the questions. This option may be useful, for exemple if a teacher wants to display the content of a room on the screen, while he's administrating this room.

Those would be the main functionalities but we also thought of more interressting things in terms of interactivity between the questions asked and the users. For exemple, we could set a timeout on each question which would stop the vote at the end of it. If our webapp becomes popular, we will have lots of available rooms. We could then add a search bar so that we can easily find the desired room (every room will have an id).

Note that those last functionalities will only be implemented if enough time remains.

## Technology used

- Angular v1
- Node v4.4.7
- Express v4.13.3
- Mongoose v4.1.2
- Chart.js v1.0.3
- Bootstrap v3.3.6
- SocketIo v1.5.1
- Npm v3.10.5
- Grunt v1.0.1
- Bower v1.8.0

## Installation
1. Clone the repo: `git clone https://github.com/MichaelRohrer/OpenAudit`
2. Install the dependencies for the server: `cd OpenAudit/` and then `npm install` 
3. Then, install the dependencies for the web app: `cd public/` and then `npm install`
4. Launch the web app from the public folder: `grunt dev`

For the moment, the server app is set up to work on heroku but not locally.

## Authors

- Michaël Rohrer
- Thomas Hernandez


