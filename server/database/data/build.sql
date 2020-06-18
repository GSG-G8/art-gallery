BEGIN;
    DROP TABLE IF EXISTS artists,
customers,products,feedBack,cart,product_user
    CASCADE;


CREATE TABLE artists
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

    CREATE TABLE customers
    (
        id SERIAL PRIMARY KEY NOT NULL,
        first_name varchar(50),
        last_name varchar(50),
        email varchar(255),
        password text,
        budget DECIMAL(10,2)
    );

    CREATE TABLE products
    (
        id SERIAL PRIMARY KEY NOT NULL,
        title text NOT NULL,
        description text NOT NULL,
        category VARCHAR(50) NOT NULL,
        property text,
        count_sold INTEGER NOT NULL DEFAULT 0,
        artist_id INTEGER REFERENCES artists(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

    CREATE TABLE feedBack
    (
        id SERIAL PRIMARY KEY,
        artist_id INTEGER REFERENCES artists(id) ON UPDATE CASCADE ON DELETE CASCADE,
        customer_id INTEGER REFERENCES customers(id) ON UPDATE CASCADE ON DELETE CASCADE,
        rate INTEGER NOT NULL,
        details VARCHAR(255) NOT NULL
    );

    CREATE TABLE cart
    (
        id SERIAL PRIMARY KEY,
        customer_id INTEGER REFERENCES customers(id) ON UPDATE CASCADE ON DELETE CASCADE,
        product_id INTEGER REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE,
        price DECIMAL(10,2) NOT NULL
    );

    CREATE TABLE product_user
    (
        id SERIAL PRIMARY KEY,
        product_id INTEGER REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE,
        artist_id INTEGER REFERENCES artists(id) ON UPDATE CASCADE ON DELETE CASCADE,
        customer_id INTEGER REFERENCES customers(id) ON UPDATE CASCADE ON DELETE CASCADE,
        selling_date date NOT NULL
    );
    COMMIT;
