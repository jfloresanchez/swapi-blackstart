-- Database
CREATE DATABASE blackstart;
USE blackstart;

-- Tables
CREATE TABLE peoples (
    id INT(12) PRIMARY KEY AUTO_INCREMENT,
    obj_id VARCHAR(100) NOT NULL,
    nombre VARCHAR(200) NOT NULL,
    altura VARCHAR(5) NOT NULL,
    masa VARCHAR(5) NOT NULL,
    color_pelo VARCHAR(30) NOT NULL,
    color_piel VARCHAR(30) NOT NULL,
    color_ojo VARCHAR(30) NOT NULL,
    nacimiento VARCHAR(112) NOT NULL,
    genero VARCHAR(20) NOT NULL,
    planeta_natal VARCHAR(100) NOT NULL,
    pelicula VARCHAR(200) NOT NULL,
    especie VARCHAR(100) NOT NULL,
    vehiculo VARCHAR(100) NOT NULL,
    nave_estelar VARCHAR(100) NOT NULL,
    creado VARCHAR(100) NOT NULL,
    editado VARCHAR(100) NOT NULL,
    url VARCHAR(200) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
