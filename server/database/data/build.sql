BEGIN;
    DROP TABLE IF EXISTS artists,
customers,products,feedBack,cart,product_user
    CASCADE;


CREATE TABLE artists
(
    id SERIAL PRIMARY KEY NOT NULL,
    firstName varchar(50) NOT NULL,
    lastName varchar(50) NOT NULL,
    email varchar(255),
    password text,
    mobileNo integer,
    customized boolean,
    reviews integer,
    profileImg text,
    socialMediaAccounts varchar(255),
    budget DECIMAL(10,2),
    bio text
);

CREATE TABLE customers
(
    id SERIAL PRIMARY KEY NOT NULL,
    firstName varchar(50),
    lastName varchar(50),
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
    count_sold INTEGER NOT NULL,
    artist_id INTEGER REFERENCES artists(id)
);

CREATE TABLE feedBack
(
    id SERIAL PRIMARY KEY,
    artist_id INTEGER REFERENCES artists(id),
    customer_id INTEGER REFERENCES customers(id),
    rate INTEGER NOT NULL,
    details VARCHAR(255) NOT NULL
);

CREATE TABLE cart
(
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(id),
    product_id INTEGER REFERENCES products(id),
    price DECIMAL(10,2) NOT NULL
);

CREATE TABLE product_user
(
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id),
    artist_id INTEGER REFERENCES artists(id),
    customer_id INTEGER REFERENCES customers(id),
    sellingDate date NOT NULL
);
COMMIT;
