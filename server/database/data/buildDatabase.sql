CREATE DATABASE artistdev;
CREATE USER artist
WITH superuser password '123';
ALTER DATABASE artistdev OWNER TO artist;
-- test db
CREATE DATABASE artistest;
CREATE USER artist2
WITH superuser password '123';
ALTER DATABASE artistest OWNER TO artist2;
