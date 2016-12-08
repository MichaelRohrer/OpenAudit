# TWEB: Labo 02 - Open Audit


## Introduction

This project is part of the TWEB course taught at HEIG-VD by professor Olivier Liechti. At this point, no functionalites have been implemented yet but the goal of this repostitory is to describe what will be done. Therefore, a brief description of coming soon functionalities can be found here. Moreover, urls of our web application in addition with short explanations of the transitions between screens are provided.

## Sitemap

Home/Login page: [https://lit-tor-91278.herokuapp.com/#!/login](https://lit-tor-91278.herokuapp.com/#!/login)

My rooms page: [https://lit-tor-91278.herokuapp.com/#!/managerooms](https://lit-tor-91278.herokuapp.com/#!/managerooms)

Manage question page: [https://lit-tor-91278.herokuapp.com/#!/adminpoll](https://lit-tor-91278.herokuapp.com/#!/adminpoll)

Available rooms page:[https://lit-tor-91278.herokuapp.com/#!/watchrooms](https://lit-tor-91278.herokuapp.com/#!/watchrooms)

Active poll page:[https://lit-tor-91278.herokuapp.com/#!/activepoll](https://lit-tor-91278.herokuapp.com/#!/activepoll)

Passive poll page:[https://lit-tor-91278.herokuapp.com/#!/passivepoll](https://lit-tor-91278.herokuapp.com/#!/passivepoll)

## Description

This web application will be based on simple Interactive polls that can be found all over the internet. It is deployed on Heroku but its landing page on GitHub pages.

For the moment, the login page is used like a home page. Every user must first register and then proceed to their [authentication](https://lit-tor-91278.herokuapp.com/#!/login). Thanks to that, we will be able to recognize, with a token, a user all along the different actions that he will be able to perform on our web application. 

Of course, those two functionalities will be available from our home page, which will then give access to the remaining part of the web app. Since there are not implemented yet, everything is reachable at this point of the project.

In the top right menu, you can click on [My Rooms](https://lit-tor-91278.herokuapp.com/#!/managerooms). Here, if you click on the "new room" button, a user can create a room, which will then contains the interaction between the question he would like to ask and the auditors. You can also see that all the previously created room from

All the rooms will be available inside the showRooms page

![showRooms](images/showRooms.jpg) 

Another page will be available for each user, very similar to the showRooms page, where his created rooms will be displayed. Various options for each room, like "delete", "close" or "open" will be there too.

![manageRooms](images/manageRooms.jpg) 

So, at this point we have the showRooms page, where every user can see all the rooms available, and join one of them, and the showMyRooms page, where a user can see his own room.

Last but not the least, once a user will be inside a room, he will be able to vote on the question ask by the room's owner. Only the room creator will be able to ask questions, the other user will only be allowed to vote. After each vote, live statistics will be display on pie charts. For exemple, we will be able to know the proportion between men and women that agreed or disagreed to the asked question.

![question](images/quiz.jpeg) 


![answer1](images/answer1.jpeg) 


![pieCharts](images/stats1.jpeg) 

Those would be the main functionalities but we also thought of more interessting things in terms of intereactivity between the questions asked and the users. For exemple, we could set a timeout on each question which would stop the vote at the end of it. Instead of a simple "agree, disagree" vote, we could propose multiple choice answers with a corresponding and more precise pie chart.

![answer2](images/answer2.jpeg) 

![pieChart2](images/stat2.jpeg) 

Note that those last functionalities will only be implemented if enought time remains (which we highly doubt!)

## Landing page

Our landing page can be found on the following link:
- [https://michaelrohrer.github.io/tweb_github_explorer/](https://michaelrohrer.github.io/tweb_github_explorer/)

## Technology used

- Angular V2
- JavaScript
- Node
- GitHub pages
- MongoDB
- Chartjs
- Bootstrap
- SocketIo
- Npm
- Grunt

## Installation
1. Clone the repo: `git clone https://github.com/MichaelRohrer/OpenAudit`
2. Install the dependencies: `npm install`
3. Launch the app: `npm start`

## Authors

- Michaël Rohrer
- Thomas Hernandez


