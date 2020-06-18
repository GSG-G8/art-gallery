BEGIN;
    DROP TABLE IF EXISTS artist,
customer,painting,feedback,cart,painting_user
    CASCADE;


CREATE TABLE artist
(
    id SERIAL PRIMARY KEY NOT NULL,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    email varchar(255),
    password text,
    mobile_no integer,
    customized boolean DEFAULT false,
    reviews integer,
    profile_img text,
    social_media_accounts text
    [],
    budget DECIMAL
    (10,2),
    bio text
);

    CREATE TABLE customer
    (
        id SERIAL PRIMARY KEY NOT NULL,
        first_name varchar(50),
        last_name varchar(50),
        email varchar(255),
        password text,
        budget DECIMAL(10,2)
    );

    CREATE TABLE painting
    (
        id SERIAL PRIMARY KEY NOT NULL,
        title text NOT NULL,
        img text NOT NULL,
        description text NOT NULL,
        category VARCHAR(50) NOT NULL,
        property text,
        count_sold INTEGER NOT NULL DEFAULT 0,
        artist_id INTEGER REFERENCES artist(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

    CREATE TABLE feedback
    (
        id SERIAL PRIMARY KEY,
        artist_id INTEGER REFERENCES artist(id) ON UPDATE CASCADE ON DELETE CASCADE,
        customer_id INTEGER REFERENCES customer(id) ON UPDATE CASCADE ON DELETE CASCADE,
        rate INTEGER NOT NULL,
        details text NOT NULL
    );

    CREATE TABLE cart
    (
        id SERIAL PRIMARY KEY,
        customer_id INTEGER REFERENCES customer(id) ON UPDATE CASCADE ON DELETE CASCADE,
        painting_id INTEGER REFERENCES painting(id) ON UPDATE CASCADE ON DELETE CASCADE,
        price DECIMAL(10,2) NOT NULL
    );

    CREATE TABLE painting_user
    (
        id SERIAL PRIMARY KEY,
        painting_id INTEGER REFERENCES painting(id) ON UPDATE CASCADE ON DELETE CASCADE,
        artist_id INTEGER REFERENCES artist(id) ON UPDATE CASCADE ON DELETE CASCADE,
        customer_id INTEGER REFERENCES customer(id) ON UPDATE CASCADE ON DELETE CASCADE,
        selling_date date NOT NULL
    );
    COMMIT;
