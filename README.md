# art-gallery

[You can visit our site from this link]([])

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

## Solution

## User Stories

### As an artist

### As an user

### As an admin

## Set up the app locally

First clone this repo: `git clone https://github.com/GSG-G8/art-gallery.git`

then run `npm i` and open new terminal then run `cd client` then `npm i` to install the dependencies for the app.

### Database Setup

In terminal type psql or pgcli if installed. Within psql/pcli enter the following commands:

```CREATE DATABASE
CREATE DATABASE [db_name];
CREATE USER [user_name] WITH PASSWORD ['password'];
ALTER DATABASE [db_name] OWNER TO [user_name]
```

Now you can set the database url in your config.env as follows (setting the values in square brackets to the values you defined in the steps above):

```
postgres://[user_name]:[password]@localhost:5432/[db_name]
```

In the terminal, connect to your database using:

```
pgcli postgres://[username]:[password]@localhost:5432/[database]
```

Next, run SQL build file in your database:

```
\i [file-local-path]/art-gallery/server/database/data/build.sql
\i [file-local-path]/art-gallery/server/database/data/fakeData.sql
```

This will create the tables in your database.

### Environment Variables

Environment variables are one of the ways we keep our product safe. If you want to access our app locally you will need to add your own.

First create a [.env]() file and add the following variables:

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

![]()

## Technologies

- [React js](https://reactjs.org/).
- [Ant Design](https://ant.design/).
- Database: [PostgreSQL](https://www.postgresql.org/).
- Styling: CSS.
- [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/).
