-- Drops the burgerSequel_db if it exists currently --
DROP DATABASE IF EXISTS burgerSequel_db;
-- Creates the "blogger" database --
CREATE DATABASE burgerSequel_db;


use burgerSequel_db;

-- drop table burgers;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
  	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CustomerId int,
  	PRIMARY KEY(id)
);



INSERT INTO burgers (burger_name, devoured) VALUES ('Big Kahuna Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Quarter Pounder with Cheese', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Buffaloe Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Jalapeno Fire Cracker', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Cheesburger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Turkey Club Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Hot Mamma Mushroom and Swiss', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Colorado Green Chili Buffalo Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Monterrey Ham Hawaiin Pineapple', false);

INSERT INTO burgers (burger_name, devoured) VALUES ('Almost Gone Burger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Ate the Whole Thing', true);
