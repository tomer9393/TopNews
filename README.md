# Top News

<img width="199" alt="logo1 c9b4146f" src="https://user-images.githubusercontent.com/63789569/125201810-4f0b6880-e279-11eb-885b-9d4ed36bfa0c.png">

<h3>In this project, we created a Web Application as a part of our Full Stack internship in our Computer Science degree studies at the College of Management Academic Studies.<h3>
<br>

  
## Table of Contents:
* [**Project Description**](#project-description)
* [**Functionality and Use-case**](#functionality-and-use-case)
* [**Use-case Video**](#use-case-videos)
* [**Technologies Used**](#technologies-used)
* [**How To Install**](#installation)

  

## Project description
News Web Site for Top World news. All the latest News, Sorted in categories, With the option for every reader to comment on a news post.


## Functionality and Use-case:
<h3>For Users -</h3>

<strong>1. Home Page</strong><br>
News search bar, News Categoty pages and Slider for a random news post from each category.

<strong>2. Search Page</strong><br>
Readers can search for a news post based on the headline, category and date.

<strong>3. News Post</strong><br>
Reader can see all the info regarding this news post and a the comments list from other readers.
<br> 

<h3>For Admins - </h3>
Admin can see all the data stored about all the news posts created.<br>
Admin can add, modify and delete posts. And also can see important information in graphs.<br>
  

<h3>Scraper</h3>
All the posts on the world news list at the right side of the home page was scraped by a scraper code made to collect news breaks from:https://www.jpost.com/international<br>


## Use-case Video


https://user-images.githubusercontent.com/63789569/125203237-4cf8d800-e280-11eb-9c87-4c81f75c73e7.mp4


  
  
## Technologies Used

<ul>
  <li><a >Server Side:  </a><a href="https://nodejs.org/en/">Node.js(JavaScript)<a><br></li>
   <li><a >Database:  </a><a href="https://www.mongodb.com/cloud">MongoDB Atlas(CloudService)<a><br></li>
   <li><a >Client Side - Users: </a><a href="https://reactjs.org/">React JS(JavaScript)<a><br></li>
   <li><a >Client Side - Admin Panel: </a><a href="https://angular.io/">Angular(TypeScript)<a><br></li>
   <li><a >Client Side: </a><a href="https://getbootstrap.com/">Bootstrap<a><br></li>
</ul>


## Installation
 
1. Download the project.<br>
2. Open the project in code editor.(we used VScode)<br>
3. In "Server/config/.env.local" change the CONNECTION_STRING to your mongodb connection string<br>
4. Go to each directory ( server, client/client-angular , client/client-react ) and run "npm install".<br>
5. After npm install is done. Open a terminal for each directory and run:<br>
     <ul>
       <li>For windows users: "npm start"</li>
       <li>For linux users: "npm run-script startLinux"</li>
     </ul>
6. In your browser:
      <ul>
       <li>Server: "http://localhost:8082/"</li>
       <li>Client - User: "http://localhost:3000/"</li>
       <li>Client - Admin Panel: "http://localhost:4200/"</li>
     </ul>
7. Enjoy!<br>

