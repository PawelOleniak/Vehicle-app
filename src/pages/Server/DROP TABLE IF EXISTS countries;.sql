DROP TABLE IF EXISTS countries;
CREATE TABLE IF NOT EXISTS countries(
   countryId   INTEGER  NOT NULL PRIMARY KEY 
  ,countryName VARCHAR(24) NOT NULL
);
INSERT INTO countries(countryId,countryName) VALUES (1,'USA');
INSERT INTO countries(countryId,countryName) VALUES (2,'Germany');
INSERT INTO countries(countryId,countryName) VALUES (3,'Japan');
