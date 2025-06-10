CREATE DATABASE IF NOT EXISTS hw1;
USE hw1;

CREATE TABLE if not exists users (
    id integer primary key auto_increment,
    username varchar(16) not null unique,
    password varchar(255) not null,
    email varchar(255) not null unique,
    name varchar(255) not null,
    surname varchar(255) not null
) ENGINE=INNODB;

CREATE TABLE if NOT exists Monster (
    id INT AUTO_INCREMENT PRIMARY KEY,
    NomeMonster VARCHAR(255) NOT NULL unique,
    Prezzo double NOT NULL,    
    Categoria varchar(60),
    MonsterExport bool,
    LinkImmagine VARCHAR(1024)
) ENGINE=INNODB;


CREATE TABLE if not exists Carrello (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_Cliente INT,
    attivo BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (ID_Cliente) REFERENCES users(id)
) ENGINE=INNODB;

CREATE TABLE if NOT exists ElementiCarrello (
    ID INT AUTO_INCREMENT PRIMARY KEY, 
    ID_Carrello INT,
    ID_Monster INT,
    Quantita INT,
    FOREIGN KEY (ID_Carrello) REFERENCES Carrello(ID),
    FOREIGN KEY (ID_Monster) REFERENCES Monster(id)
) ENGINE=InnoDB;

    