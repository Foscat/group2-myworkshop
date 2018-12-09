DROP DATABASE IF EXISTS tester;
CREATE database tester;

USE tester;

CREATE TABLE userProf (
	authID int not null auto_increment,
	userName VARCHAR(100) NULL,
	eMail VARCHAR(100) NULL,
    password VARCHAR(100) NULL,
	PRIMARY KEY(authID)
);

INSERT INTO userProf (userName, eMail, password) VALUES(Kyle, urmom@bang.com, myPassword);


CREATE TABLE userTags (
    tagId INT NOT NULL auto_increment,
    tagName VARCHAR(50) NULL,
    FOREIGN KEY(authID) REFERENCES userProf(authID);
);

INSERT INTO userTags (tagName) VALUE (chicken);