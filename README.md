# Well Kids API #

## Installation ##

git clone `https://github.com/hfrankel/mern_healthy_recipes_app_partB_api.git`

## Intro ##

Well Kids api is an api for the Well Kids healthy recipes application. The purpose of the Healthy Recipes web application is to empower parents to cook quick, healthy meals for their children.

`https://github.com/DBThompson713/KatApp_React`

#### Tech stack

##### Front-end:
- HTML, CSS/SASS
- React - JavaScript library for building user interfaces
- Redux - JavaScript library for managing application state

##### Back-end:
- NodeJS - JavaScript runtime environment
- Express - web application framework for NodeJS

##### Cloud:
- Heroku - cloud deployment platform
- Amazon S3 - object storage service
- MongoDB Atlas - cloud database

##### Third party/other:
- Auth0 - authentication and authorisation for web applications
- Middleware

#### Frontend

## DevDependencies ##

* http-proxy-middleware

## Dependencies ##

* auth0-spa-js
* jest-dom
* react
* user-event
* axios
* bootstrap
* dotenv
* normalize.css
* react
* react-bootstrap
* react-dom
* react-redux
* react-router-dom
* react-s3
* react-scripts
* redux
* redux-form
* redux-thunk

#### Backend

## DevDependencies ##

* Axios
* Forever
* Jest
* Nodemon
* Supertest

## Dependencies ##

* Celebrate
* Cors
* Dotenv
* Express
* Express-Handlebars

#### Functionality / features
1. **Admin dashboard** - the client can manage community flagged recipes and feature recipes.
2. **Community flagging of content** - as a community, users are responible for flagging inappropriate content through a form. The flagged recipe shows up in the Admin dashboard where only the Admin can delete it.
3. **Auth0 authentication and authorisation** - easy for users to manage their password with socials, provides a high level of security for the user.
4. **Comment on a recipe** - the community can share their experiences making the recipe.
5. **Rate a recipe** - a counting system based off how many claps users have attributed to the recipe. The applaud rating system was chosen over a standard 5 star rating system.

##### Future feature considerations
6. **Favourite a recipe** - users can easily return to their favourite recipes.
7. **Share a recipe** - admin can cross-promote website recipes to her business social media profiles, users can share recipes they like with their social network.

------

#### Target audience
![](./docs/user_persona_user.png)
![](./docs/user_persona_admin.png)

#### UX/UI design documentation

Documenting the evolution of user stories

##### Brain storming user stories
![](./docs/user_story_evolution_1.png)

##### Simplifying user personas
![](./docs/user_stories_simplifying_personas.png)

##### Scrum Poker: Estimating User Story priority and complexity

1. Grab a set of scrum poker cards
2. Each player receives card values of 1, 2, 3, 5, 8, 13, 21 and a break card
3. The project lead reads out a user story
4. Each team member votes on story priority then story complexity
5. The lowest and highest card value holders explain why they chose their numbers
6. The team members can change their vote, card numbers are totalled and divided by the number of team members
7. This number is recorded on the user story and plotted on a grid to determine which tasks should be completed first, second and last
8. User stories are delegated to team members based on their placement on the grid below

![](./docs/scrum_planning.png)

##### Adding scrum values to user stories during scrum poker
![](./docs/user_stories_scrum_example.png)

##### Final User Stories organised by app features
![](./docs/user_stories_kanban_final.png)

#### Wireframes & Mockups

- *Wireframes were created with Balsamiq*
- *Mockups were created with Adobe XD*

[Navigatable Desktop Mockup](https://xd.adobe.com/view/caa39ebc-0746-4846-530d-b68a07023d3e-bc92/?fullscreen&hints=off)
[Navigatable Mobile Mockup](https://xd.adobe.com/view/f49a4364-4b14-4a2a-58aa-d1160b0f5e65-82ab/?fullscreen&hints=off)

## Homepage
![](./docs/wireframes_homepage_mobile_and_desktop.jpg)

![](./docs/mockup_homepage_mobile.jpg)

![](./docs/mockup_homepage_desktop.jpg)

------

#### Testing

##### Development & Production Testing

[Link to manual test spreadsheet](https://docs.google.com/spreadsheets/d/1LBLUaXR191t0HC_BJbGhc7i397YmtS1Q_rQPLP_ObNs/edit?usp=sharing)