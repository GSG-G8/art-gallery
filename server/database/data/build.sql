BEGIN;
    DROP TABLE IF EXISTS admin,artist,
customer,painting,feedback,cart,painting_user
    CASCADE;

CREATE TABLE artist
(
    id SERIAL PRIMARY KEY NOT NULL,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    password text NOT NULL,
    mobile_no integer UNIQUE,
    customized boolean DEFAULT false,
    reviews integer,
    profile_img text,
    social_media_accounts text
    [],
    budget DECIMAL
    (10,2) DEFAULT 0 NOT NULL,
    bio text
);

    CREATE TABLE customer
    (
        id SERIAL PRIMARY KEY NOT NULL,
        first_name varchar(50) NOT NULL,
        last_name varchar(50) NOT NULL,
        email varchar(255) UNIQUE NOT NULL,
        password text NOT NULL,
        budget DECIMAL(10,2) DEFAULT 0 NOT NULL
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
        customer_id INTEGER REFERENCES customer(id) ON UPDATE CASCADE ON DELETE CASCADE,
        selling_date date NOT NULL
    );

    CREATE TABLE admin
    (
        id SERIAL PRIMARY KEY NOT NULL,
        name varchar(50) NOT NULL,
        email varchar(255) UNIQUE NOT NULL,
        password text NOT NULL,
        mobile integer UNIQUE
    );
    INSERT INTO admin
        (id,name,email,password,mobile)
    VALUES
        ('1', 'artist Admin', 'admin-artist@gmail.com', '$2b$10$5Z1dB9i1D75mrT8bNcxJruyMjolMbjVQ/cxzzm2J4Trze4e7lecc6', '0590000000');
    COMMIT;
