-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-05-2021 a las 20:21:22
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
  `claveHabitacion` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
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
  `cargo` enum('Director/a','Administrador/a','Encargado/a','Recepcionista','Cocinero/a','Camarero/a','Limpieza') NOT NULL,
  `puesto` enum('Hotel','Restaurante') NOT NULL
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
  `idHabitacion` int(10) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `numHabitacion` int(20) NOT NULL,
  `img` varchar(255) NOT NULL,
  `img2` varchar(255) NOT NULL,
  `numCamas` int(20) NOT NULL,
  `Baño` int(11) NOT NULL,
  `PrecioBase` double(50,2) NOT NULL,
  `Estado` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `habitaciones`
--

INSERT INTO `habitaciones` (`idHabitacion`, `nombre`, `numHabitacion`, `img`, `img2`, `numCamas`, `Baño`, `PrecioBase`, `Estado`) VALUES
(1, 'Habitacion Individual', 1, 'habitacionIndividual.jpg', 'habitacionIndividualBaño.jpg', 1, 1, 80.00, 'Disponible'),
(2, 'Habitacion Superior', 2, 'habitacionSuperior.jpg', 'habitacionSuperiorBaño.jpg', 2, 1, 150.00, 'Disponible'),
(3, 'Habitacion Ejecutiva', 3, 'habitacionEjecutiva.jpg', 'habitacionEjecutivaBaño.jpg', 1, 1, 150.00, 'Disponible'),
(4, 'Habitacion Familiar', 4, 'habitacionFamiliar.jpg', 'habitacionFamiliarBaño.jpg', 3, 1, 180.00, 'Disponible'),
(5, 'Suite Presidencial', 5, 'suitePresidencial', 'suitePresidencialBaño', 1, 1, 250.00, 'Disponible'),
(6, 'Habitacion Estandar', 0, 'habitacionEstandar.jpg', 'habitacionEstandarBaño.jpg', 2, 1, 100.00, 'Disponible');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `idReserva` int(10) NOT NULL,
  `cliente_email` varchar(30) NOT NULL,
  `num_Tarjeta` varchar(16) NOT NULL,
  `titularTarjeta` varchar(50) NOT NULL,
  `caducidadTarjeta` varchar(5) NOT NULL,
  `nombreHabitacion` varchar(50) NOT NULL,
  `fechaEntrada` int(25) NOT NULL,
  `fechaSalida` int(25) NOT NULL,
  `numPersonas` int(11) DEFAULT NULL
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
  ADD PRIMARY KEY (`idHabitacion`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`idReserva`);

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
  MODIFY `idHabitacion` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `idReserva` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `valoraciones`
--
ALTER TABLE `valoraciones`
  MODIFY `Id_Valoracion` int(24) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
