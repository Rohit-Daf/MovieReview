CREATE DATABASE IF NOT EXISTS moviereview;
USE moviereview;
CREATE TABLE IF NOT EXISTS users(
    id int primary key AUTO_INCREMENT,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    email varchar(50) unique,
    password VARCHAR(100),
    mobile VARCHAR(20),
    birth date
);
CREATE TABLE IF NOT EXISTS reviews (
    id INT PRIMARY KEY AUTO_INCREMENT,
    movie_id INT NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL,
    user_id INT NOT NULL,
    modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE IF NOT EXISTS Shares (
    review_id INT,
    user_id INT,
    FOREIGN KEY (review_id) REFERENCES reviews(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE movies (
    id INT PRIMARY KEY,
    title TEXT,
    release DATE
);
