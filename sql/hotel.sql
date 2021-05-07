-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-05-2021 a las 17:20:26
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hotel`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `idCliente` int(5) NOT NULL,
  `dniCliente` varchar(15) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `pais` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `titularTarjeta` varchar(50) NOT NULL,
  `numTarjeta` int(50) NOT NULL,
  `fechaExpTarjeta` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `idEmp` int(5) NOT NULL,
  `dniEmp` varchar(15) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `pais` varchar(50) NOT NULL,
  `contrasenya` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `cargo` enum('Director/a','Administrador/a','Encargado/a','Recepcionista','Limpieza') NOT NULL,
  `puesto` enum('Hotel') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`idEmp`, `dniEmp`, `nombre`, `apellidos`, `email`, `pais`, `contrasenya`, `telefono`, `cargo`, `puesto`) VALUES
(1, '12345678D', 'Daniel ', 'Amer Parera', 'danielamer@gmail.com', 'España', '12345', '634239847', 'Director/a', 'Hotel'),
(2, '87654321W', 'Tito', 'Aaron Hidalgo', 'titoaaron@gmail.com', 'Andorra', '54321', '634123456', 'Administrador/a', 'Hotel'),
(3, '56392742H', 'Marc', 'Jorge Gomez', 'marcjorge@gmail.com', 'España', '11111', '634015942', 'Administrador/a', 'Hotel');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitaciones`
--

CREATE TABLE `habitaciones` (
  `idHabitacion` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `numHabitacion` int(20) NOT NULL,
  `numCamas` int(20) NOT NULL,
  `Baño` int(11) NOT NULL,
  `PrecioBase` double(50,2) NOT NULL,
  `Estado` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `fechaEntrada` int(25) NOT NULL,
  `fechaSalida` int(25) NOT NULL,
  `numPersonas` int(11) DEFAULT NULL,
  `claveHabitacion` varchar(50) NOT NULL,
  `Id_R_Cliente` int(11) DEFAULT NULL,
  `Id_R_Habitacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valoraciones`
--

CREATE TABLE `valoraciones` (
  `Id_Valoracion` int(24) NOT NULL,
  `Rating` double(50,1) NOT NULL,
  `Comentario` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`idCliente`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`idEmp`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  ADD PRIMARY KEY (`idHabitacion`),
  ADD UNIQUE KEY `idHabitacion` (`idHabitacion`),
  ADD KEY `idHabitacion_2` (`idHabitacion`),
  ADD KEY `idHabitacion_3` (`idHabitacion`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD KEY `Id_R_Cliente` (`Id_R_Cliente`),
  ADD KEY `Id_R_Habitacion` (`Id_R_Habitacion`);

--
-- Indices de la tabla `valoraciones`
--
ALTER TABLE `valoraciones`
  ADD PRIMARY KEY (`Id_Valoracion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `idCliente` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `idEmp` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  MODIFY `idHabitacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `valoraciones`
--
ALTER TABLE `valoraciones`
  MODIFY `Id_Valoracion` int(24) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`idCliente`) REFERENCES `valoracion_cliente_habitacion` (`Id_V_Cliente`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  ADD CONSTRAINT `habitaciones_ibfk_1` FOREIGN KEY (`idHabitacion`) REFERENCES `valoracion_cliente_habitacion` (`Id_V_Habitacion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`Id_R_Cliente`) REFERENCES `clientes` (`idCliente`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reservas_ibfk_2` FOREIGN KEY (`Id_R_Habitacion`) REFERENCES `habitaciones` (`idHabitacion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `valoraciones`
--
ALTER TABLE `valoraciones`
  ADD CONSTRAINT `valoraciones_ibfk_1` FOREIGN KEY (`Id_Valoracion`) REFERENCES `valoracion_cliente_habitacion` (`Id_V_Valoracion`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
