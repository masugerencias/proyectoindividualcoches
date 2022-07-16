#DROP DATABASE rentacarsql;

CREATE DATABASE rentacarsql;

USE rentacarsql;

#DROP TABLE nuevos_Usuarios
CREATE TABLE nuevos_usuarios (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR (100),
    empleado BOOLEAN default 0,
    telefono VARCHAR(15),
    email VARCHAR(100) unique NOT NULL,
    contrasena VARCHAR(100) NOT NULL,
    confirmarcontrasena VARCHAR(100)NOT NULL,
    PRIMARY KEY(id)
);
select * from nuevos_usuarios;


#DROP TABLE Facturas
CREATE TABLE Facturas (
    id INT AUTO_INCREMENT,
    num_tarjeta CHAR(16) NOT NULL,
    nombre_tarjeta varchar(100),
    importe INT (10),
    id_vehiculo varchar (100),
    fecha_transcaccion date,
   	dni CHAR(9) NOT NULL,
    fk_id_nuevos_usuarios int,
    PRIMARY KEY(id),
    foreign key(fk_id_nuevos_usuarios) REFERENCES nuevos_Usuarios(id)
);
select * from nuevos_usuarios;
select * from facturas;
#insert into nuevos_usuarios values (null,'victor', 'poirot',1,'621016880','victor@gmail.com','1234','1234');
#columnas con facturas dont match.
#insert into facturas values (null, "123456789", "yann",120,2007-05-08,"11888888f",null);
#insert into facturas values (null,'1234123412341234',500,'2020-06-20','11111111F',null);
