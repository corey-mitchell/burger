CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger VARCHAR(45) NOT NULL,
    devoured BOOLEAN
);