-- insert 3 burgers
INSERT INTO burgers (burger_name, devoured, date)
VALUES
('Black Bean Veggie Burger', false, CURRENT_TIMESTAMP),
('The Impossible Vegan Burger', false, CURRENT_TIMESTAMP),
('The Classic Cheeseburger', false, CURRENT_TIMESTAMP);

SELECT * FROM burgers;
