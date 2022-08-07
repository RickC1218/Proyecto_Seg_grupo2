--creando la base de datos
CREATE DATABASE crudnodejsmysql;

--utilizando la base de datos
use crudnodejsmysql;

--creando una tabla
CREATE TABLE usuarios (
    id INT(6) UNSIGNED not null AUTO_INCREMENT PRIMARY KEY ,
    name varchar(50) not null,
    correo varchar(150) not null,
    edad INT(3) not null
);

--mostrar todas las tablas
SHOW TABLES;

--describir una tabla
describe usuarios;

--arreglar el error por ER_NOT_SUPPORTED_AUTH_MODE
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin';