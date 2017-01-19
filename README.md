# TWEB: Labo 02 - Open Audit


## Introduction

This project is part of the TWEB course taught at HEIG-VD by professor Olivier Liechti. The purpose of it is to design an application which should allow a user to create surveys and answer questions. The application must also display data in real time (we used socket.io) and must display data visually (pie chart). Part of the application must be designed to be displayed and visible to everyone (for example, to the projector) to facilitate interaction between the surveyor and the participants. A display function was created to fulfill this last requirement.

## Landing page

Our landing page can be found on the following link:
[https://michaelrohrer.github.io/OpenAudit/](https://michaelrohrer.github.io/OpenAudit/)

## Web Application

Our web app can be found on the following link:
[https://limitless-tor-21340.herokuapp.com/](https://limitless-tor-21340.herokuapp.com/)


## Description

This web application is based on simple Interactive polls that can be found all over the internet. It is deployed on Heroku but its landing page on GitHub pages.

The login page is used like a home page. Every user must first register and then proceed to his authentication

A user can click on Create Rooms and then if he clicks on the "new room" button, he will be able to create a room, which will then contain the interaction between the questions he would like to ask and the auditors. Once the room's name is entered, if the "create" button is pressed, the user will be redirected into the adminPoll page where he can create, via the "new question" button, multiple choice questions. He can add as many solutions as he wants and select the correct solution to the question. Every time that the "submit" bouton is pressed, the question will be send to the corresponding room, where the auditors will see it and will be able to answer it. Note that all the previous created question are also displayed here (for exemple, click on the "question 1 " button to see the first created question). Once the admin close a question, it can no more be answered and the solution is then displayed 

Besides the possibility to create a new room in the Create Manage Rooms page, Note that all the previously created room from that user are displayed here. For each room, a user has the choice to open, close or delete it. The close button allowed a user to close a room, which means that this room will no longer be in the Join Follow Rooms page. On the contrary, the open button will bring back the room to the available list, and the user will be redirected to the adminPoll page where he will be able to manage the questions. Finally, a room will be permanently deleted if the "delete" button is pressed.

All the open rooms will be available inside the Join Follow Rooms page. Note that there is a search bar, which is not cast sensitive. From there, a user can simply join a room, if he clicks on the corresponding button, and he will be redirected inside the activepoll page. Once a user is inside a room, he will be able to vote on the questions asked by the room's owner. Only the room creator will be able to ask questions. The other users will only be allowed to vote. After each vote, live statistics will be displayed on pie charts.

Besides the possibility to join a room, a user may simply follow a room, using the corresponding button inside the Join Follow Rooms page. He will then be redirected inside the passivePoll page, where he will be able to follow the active poll but without any possibilities to answer the questions. This option may be useful, for exemple if a teacher wants to display the content of a room on the screen, while he's administrating this room.

## Next steps

The first apsect to consider is the security. On the server side, we must implement a control to validate each action from any user, so that a user can only do what he is allowed. For exemple, a user should not be able to access the admin side of a room.

Secondly, we could add a password to access a room. Since every room are public, maybe the presentor does not want any users that are not physically present in the current presentation, to be able to follow or answer the questions (confidentiallity).

Finally, a user should not be able to answer the question again if the page is refreshed

## Technology used

- Angular v1
- Node v4.4.7
- Express v4.13.3
- Mongoose v4.1.2
- MongoDB v3.4.1
- Docker v1.12
- Chart.js v1.0.3
- Bootstrap v3.3.6
- SocketIo v1.5.1
- Npm v3.10.5
- Grunt v1.0.1
- Bower v1.8.0

## Installation
1. Clone the repo: `git clone https://github.com/MichaelRohrer/OpenAudit`
2. Enter the project folder: `cd OpenAudit/` and then simply use `docker-compose up`
3. For Mac OS users: in your favorite navigator, write `localhost:3000` in the url bar to enter the web application
4. For Windows users: in your favorite navigator, instead of localhost, use your Docker machine IP `<Docker IP>:3000` in the url bar to enter the web application

## Authors

- Michaël Rohrer
- Thomas Hernandez


