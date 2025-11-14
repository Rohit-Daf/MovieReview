create DATABASE moviereview create table users(
    id int primary key AUTO_INCREMENT,
    first_name TEXT(20),
    last_name TEXT(20),
    email varchar(20) unique,
    password TEXT(20),
    mobile TEXT(20),
    birth date
);
CREATE TABLE reviews (
    id INT PRIMARY KEY,
    movie_id INT NOT NULL,
    review TEXT(30) NOT NULL,
    rating INT NOT NULL,
    user_id INT NOT NULL,
    modified TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE Shares (
    review_id INT,
    user_id INT,
    FOREIGN KEY (review_id) REFERENCES reviews(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE movies (
    id INT PRIMARY KEY,
    title VARCHAR(20),
    release_date DATE
);