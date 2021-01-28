create TABLE persons (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    login VARCHAR(255),
    password VARCHAR(255)
); 

create TABLE cards (
    id SERIAL PRIMARY KEY,
    number INTEGER,
    user_id INTEGER,
    balance INTEGER,
    FOREIGN KEY (user_id) REFERENCES persons(id)
);