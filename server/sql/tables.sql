CREATE TABLE Users(
   id SERIAL PRIMARY KEY,
   name VARCHAR NOT NULL,
   lastName VARCHAR NOT NULL,
   email VARCHAR NOT NULL,
   phone VARCHAR NOT NULL,
   password VARCHAR NOT NULL,
   address VARCHAR NOT NULL
);

CREATE TABLE Products(
   id SERIAL PRIMARY KEY,
   name VARCHAR NOT NULL,
   quantity INTEGER NOT NULL,
   description TEXT 
);