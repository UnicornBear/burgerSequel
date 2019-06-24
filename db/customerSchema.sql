USE qm70izqypmecktl0;

CREATE TABLE customers
(
	id int(11) auto_increment not null,
	name varchar(255),
	createdAt datetime,
	updatedAt datetime,
  	PRIMARY KEY(id)
);