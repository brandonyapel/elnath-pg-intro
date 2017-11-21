CREATE TABLE shoes(
	id SERIAL PRIMARY KEY,
	name VARCHAR(80),
	cost INTEGER
	);
	
INSERT INTO shoes(name,cost)
VALUES 	('Red Wing',250),
		('Puma Soliel V2', 40),
		('Space Boots',10);

INSERT INTO shoes(name,cost)
VALUES 	('Bates',120);
		

SELECT * FROM shoes;