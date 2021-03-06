## Sample "NodeJS Express Application with MySQL Backend"

Built using examples found online.

NodeJS web application using the "Express Framework".  Code is written in JavaScript

Understanding how frameworks like these work is easier when you first understand how PHP works.

This app also uses an interesting form of Cascading Style Sheets.  This will be explained in class.

### App Server Configuration:

Create an Ubuntu 18.04.3 LTS Server

Update and Upgrade it

Install NodeJS:  sudo apt install nodejs
Install NPM Node Package Manager:   sudo apt install npm

### Database Server Configuration

Create an Ubuntu 18.04.3 LTS Server

Update and Upgrade it

Install the MariaDB per instructions on Canvas

Import the SQL file in the "dbstuff" directory


### Project Directory Structure

    ├── node-mqsql-crud-app (main directory)   
    ├── node_modules
        ├── public
        ├── assets 
            ├── img
    ├── routes
        ├── index.js
        ├── player.js
    ├── views
        ├── partials 
            ├── header.ejs
        ├── index.ejs
        ├── add-player.ejs
        ├── edit-player.ejs
    ├── app.js  

### App Setup Instructions:

Login to the server. Verify you are in your home directory: cd ~

then...

cd node-mysql-crud-app

npm init

npm install express express-fileupload body-parser mysql ejs req-flash --save

npm install nodemon -g

### App Startup Instructions:

nodemon app.js
