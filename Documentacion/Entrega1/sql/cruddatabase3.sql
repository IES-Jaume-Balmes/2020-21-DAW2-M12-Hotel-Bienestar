-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-05-2021 a las 19:37:13
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cruddatabase3`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `commentBody` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ReservaId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `adults` varchar(255) NOT NULL,
  `childreen` varchar(255) DEFAULT NULL,
  `checkIn` datetime NOT NULL,
  `checkOut` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id`, `name`, `email`, `phone`, `adults`, `childreen`, `checkIn`, `checkOut`, `createdAt`, `updatedAt`) VALUES
(1, 'Marc', 'm@gmail.com', '123456789', '1', '0', '2021-05-09 18:33:37', '2021-05-11 18:33:42', '2021-05-09 16:33:24', '2021-05-09 16:33:24'),
(2, 'Marc', 'm@gmail.com', ' ', '1', '0', '2021-05-07 00:00:00', '2021-05-08 00:00:00', '2021-05-09 16:39:41', '2021-05-09 16:39:41'),
(3, 'Pol', 'p@gmail.com', ' ', '2', '1', '2021-05-04 00:00:00', '2021-05-09 00:00:00', '2021-05-09 17:18:43', '2021-05-09 17:18:43');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Marc', '$2b$10$PIhOKq1ML7/lJW..PblZhOMA1tmaao.t0w3gvJ3OYcpfEkeVPmOlm', '2021-05-09 16:41:33', '2021-05-09 16:41:33'),
(2, 'Daniel', '$2b$10$rDSAd2v8BCAkm4ew52CpHOihD8GACvrjBzeKJ4Ks7MVM2nK/HAXNG', '2021-05-09 16:58:17', '2021-05-09 16:58:17'),
(3, 'Tito', '$2b$10$w63g.qN5OdqxvCeCj.5hCu5nH3sZQsjNJFWVrlJVGKvou3ZtnbZSu', '2021-05-09 16:58:28', '2021-05-09 16:58:28'),
(4, 'Marc5', '$2b$10$8WLVsHHgNR3BwFRMLlFO4u9etWpmigJYT4qH6tL.Jq2GA.S0OtnyC', '2021-05-09 17:17:20', '2021-05-09 17:17:20'),
(5, 'Marc12', '$2b$10$1R1v/G.AFqZa7qfer/anM.kITNnvXnj/gq.MaVDwSkGPXnvUnvGDm', '2021-05-09 17:18:01', '2021-05-09 17:18:01');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ReservaId` (`ReservaId`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`ReservaId`) REFERENCES `reservas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
