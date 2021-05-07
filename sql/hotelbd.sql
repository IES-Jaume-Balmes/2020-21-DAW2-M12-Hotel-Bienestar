-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-05-2021 a las 20:02:47
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
-- Base de datos: `hotelbd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `Id_Cliente` int(24) NOT NULL,
  `Nombre` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Apellido` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Apellido2` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Email` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Telefono` int(9) DEFAULT NULL,
  `Pais` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos_tarjeta`
--

CREATE TABLE `datos_tarjeta` (
  `Id_Tarjeta` int(24) NOT NULL,
  `Titular_Tarjeta` varchar(60) DEFAULT NULL,
  `Tipo_Tarjeta` varchar(60) DEFAULT NULL,
  `Num_Tarjeta` varchar(60) DEFAULT NULL,
  `Fecha_Caducidad` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `Id` int(24) NOT NULL,
  `Nom` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Cognom` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Email` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Telefon` int(9) DEFAULT NULL,
  `Pais` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitaciones`
--

CREATE TABLE `habitaciones` (
  `Id_Habitacion` int(24) NOT NULL,
  `Num_Habitacion` int(24) DEFAULT NULL,
  `Baño` tinyint(4) DEFAULT NULL,
  `Num_Camas` int(24) DEFAULT NULL,
  `Precio` decimal(4,2) DEFAULT NULL,
  `Estado` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `Id_R_Habitacion` int(11) DEFAULT NULL,
  `Id_R_Cliente` int(11) DEFAULT NULL,
  `Id_R_Tarjeta` int(24) DEFAULT NULL,
  `F_Llegada` date DEFAULT NULL,
  `F_Salida` date DEFAULT NULL,
  `Codigo_Acesso` int(5) DEFAULT NULL,
  `num_Personas` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valoraciones`
--

CREATE TABLE `valoraciones` (
  `Id_Valoracion` int(24) NOT NULL,
  `Rating` decimal(1,1) DEFAULT NULL,
  `Comentario` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valoracion_cliente_habitacion`
--

CREATE TABLE `valoracion_cliente_habitacion` (
  `Id_V_Cliente` int(24) DEFAULT NULL,
  `Id_V_Habitacion` int(24) DEFAULT NULL,
  `Id_V_Valoracion` int(24) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`Id_Cliente`);

--
-- Indices de la tabla `datos_tarjeta`
--
ALTER TABLE `datos_tarjeta`
  ADD PRIMARY KEY (`Id_Tarjeta`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  ADD PRIMARY KEY (`Id_Habitacion`);

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
  MODIFY `Id_Cliente` int(24) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `datos_tarjeta`
--
ALTER TABLE `datos_tarjeta`
  MODIFY `Id_Tarjeta` int(24) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `Id` int(24) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  MODIFY `Id_Habitacion` int(24) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `valoraciones`
--
ALTER TABLE `valoraciones`
  MODIFY `Id_Valoracion` int(24) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
