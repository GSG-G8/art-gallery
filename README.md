# art-gallery

[You can visit our site from this link]([https://art-gallery-v1.herokuapp.com/])

## Team Leader

- Rana Obeid.

## Team Members

- Lina Ebeid.
- Mariam Isa.
- Muhammad Abdulhadi.
- Alaa Abu Swaireh.

## Summary

Art gallery is an Arab web application which allows artists to view their arts. so each artist has a profile . Customers can buy arts

## Challenge

The inability of painters to sell their paintings and the difficulty in communicating with customers.

## Solution

Our site provides artists with the ability to sell their paintings at reasonable prices and the ability to communicate with the customer appropriately.

## User Stories

### As an artist

- I can sign up / login and have my own profile
- I can edit my profile data
- I can upload my paintings in my profile

### As an user

- I can sign up / login and have an account
- I can Check artworks for different artists
- I can Search and filter art works
- I can buy paintings and add it to my cart
- I can Checkout from cart
- I can add a review for the artist

### As an admin

- I can delete a artist/user/painting

## Set up the app locally

First clone this repo: `git clone https://github.com/GSG-G8/art-gallery.git`

then run `npm i` and open new terminal then run `cd client` then `npm i` to install the dependencies for the app.

### Database Setup

In terminal type psql or pgcli if installed. Within psql/pcli enter the following commands:

```CREATE DATABASE
\i [file-local-path]/art-gallery/server/database/data/buildDatabase.sql
```

Now you can set the database url in your config.env as follows (setting the values in square brackets to the values you defined in the steps above):

```
postgres://artist:123@localhost:5432/artistdev
```

In the terminal, connect to your database using:

```
pgcli postgres://artist:123@localhost:5432/artistdev
```

Next, run SQL build file in your database:

```
\i [file-local-path]/art-gallery/server/database/data/build.sql
\i [file-local-path]/art-gallery/server/database/data/fakeData.sql
```

This will create the tables in your database.

### Environment Variables

Environment variables are one of the ways we keep our product safe. If you want to access our app locally you will need to add your own.

First create a [.env](https://www.npmjs.com/package/dotenv) file and add the following variables:

```
DATABASE_URL
SECRET_KEY
```

### Running the project

1. Install all dependencies

```
npm run project-setup
```

2. To run the server, Open your terminal and run:

```
npm run dev
```

3. To run the React Development server, Open another terminal and run:

```
cd client
npm start
```

4. To run the whole app you need to run both servers

5. To run the tests:

```
npm test
```

## Data-Base Schema

![](https://imgur.com/JjIlsFH.png)

## Technologies

- [React js](https://reactjs.org/).
- [Ant Design](https://ant.design/).
- Database: [PostgreSQL](https://www.postgresql.org/).
- Styling: CSS.
- [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/).
