INSERT INTO `habitaciones` (`id`, `nombre`, `numHabitacion`, `numCamas`, `Baño`, `Descripcion`, `PrecioBase`, `Estado`, `Imagen`, `createdAt`, `updatedAt`) VALUES
(1, 'Habitación Superior', 1, 1, 1, 'Acogedoras habitaciones dobles de 20 m² para una experiencia de confort en pareja, con vistas al tranquilo jardín interior del hotel, o exteriores a la calle Mallorca.', 99, 'Disponible', 'habitacion1.jpg', '2021-05-15 15:37:58', '2021-05-15 15:37:58'),
(2, 'Habitacion Superior 2', 2, 1, 1, 'Acogedoras habitaciones dobles de 20 m² para una experiencia de confort en pareja, con vistas al tranquilo jardín interior del hotel, o exteriores a la calle Mallorca.', 99, 'Disponible', 'habitacion2.jpg', '2021-05-15 15:48:46', '2021-05-15 15:48:46'),
(3, 'Suite', 3, 2, 1, 'Exclusiva habitación que se caracteriza por su ambiente elegante con cuidada decoración, piezas de arte y una acogedora zona de descanso equipada con sofá. Ideal para una tranquila estancia de negocios o placer.', 160, 'Disponible', 'habitacion3.jpg', '2021-05-15 15:43:54', '2021-05-15 15:43:54'),
(4, 'Habitación Familiar', 4, 4, 2, 'Habitaciones familiares dúplex de 25 m² con capacidad para cuatro personas, ideales para viajes en familia o el cliente que desea combinar trabajo y descanso en ambientes separados. Distribuidas en dos niveles, disponen de un salón de estar equipado con s', 218, 'Disponible', 'habitacion4.jpg', '2021-05-15 15:43:54', '2021-05-15 15:43:54'),
(5, 'Habitacion Familiar 2 ', 5, 4, 2, 'Habitaciones familiares dúplex de 25 m² con capacidad para cuatro personas, ideales para viajes en familia o el cliente que desea combinar trabajo y descanso en ambientes separados. Distribuidas en dos niveles, disponen de un salón de estar equipado con s', 218, 'Disponible', 'habitacion5.jpg', '2021-05-15 15:48:46', '2021-05-15 15:48:46'),
(6, 'Apartamento', 6, 3, 2, 'Apartamentos de lujo de 35 a 57 m² y capacidades para 2, 3 y 4 personas, con cocina completamente equipada y salón comedor. Situados en un edificio anexo típico del modernismo catalán de principios del siglo XX, exhiben una cuidada decoración de diseño co', 251, 'Disponible', 'habitacion6.jpg', '2021-05-15 15:48:46', '2021-05-15 15:48:46'),
(7, 'Habitacion Real', 7, 5, 3, 'Habitacion equipada 100% para la realeza con tres camas de matrimonio y dos baños, situada en pleno centro de Madrid con vistas directas a la calle principal ', 300, 'Disponible', 'habitacion7.jpg', '2021-05-15 15:48:46', '2021-05-15 15:48:46'),
(8, 'Habitación Executive', 8, 2, 1, 'Exclusivas habitaciones de diseño, de aproximadamente 25 m². Además de la elegante zona de dormitorio, la mayoría de las habitaciones disponen de una pequeña zona de trabajo. Ideales para viajes de negocios, permiten combinar trabajo y placer en un entorn', 111, 'Disponible', 'habitacion8.jpg', '2021-05-15 15:41:33', '2021-05-15 15:41:33'),
(9, 'Habitacion Nupcial', 9, 1, 1, 'Habitacion para despues de la boda, preparada con todo de talle para que los novios tengan una noche de bodas lo mas confortable possible', 100, 'Disponible', 'habitacion9.jpg', '2021-05-15 15:48:46', '2021-05-15 15:48:46'),
(10, 'Habitacion sin Baño', 10, 1, 0, 'Habitacion sin baño, con una cama y una mesita. Habitacion para una noche con luz natural', 25, 'Disponible', 'habitacion10.jpg', '2021-05-15 15:48:46', '2021-05-15 15:48:46');

INSERT INTO `reservas` (`id`, `adults`, `children`, `checkIn`, `checkOut`, `claveHabitacion`, `precioReserva`, `createdAt`, `updatedAt`, `HabitacioneId`) VALUES
(1, 2, 3, '2021-05-21', '2021-05-22', NULL, 99, '2021-05-27 17:45:30', '2021-05-27 17:45:30', 1),
(2, 1, 2, '2021-05-21', '2021-05-22', NULL, 99, '2021-05-27 17:45:30', '2021-05-27 17:45:30', 2),
(3, 4, 2, '2021-05-21', '2021-05-22', NULL, 160, '2021-05-27 17:45:30', '2021-05-27 17:45:30', 3);

INSERT INTO `clientes` (`id`, `dniCliente`, `name`, `apellidos`, `email`, `pais`, `phone`, `titularTarjeta`, `numTarjeta`, `fechaExpTarjeta`, `createdAt`, `updatedAt`, `ReservaId`, `ValoracioneId`) VALUES
(35, '123456789Q', 'Marc ', 'Jorge', 'marc@gmail.com', 'España', 123456789, 'Marc Jorge', 1234567890, '11/21', '2021-05-21 17:29:54', '2021-05-21 17:29:54', 1, NULL),
(36, '234567891Q', 'Tito ', 'Aaron', 'tito@gmail.com', 'Italia', 123456789, 'Tito Aaron', 1234567890, '09/24', '2021-05-21 17:29:54', '2021-05-21 17:29:54', 2, NULL),
(37, '345678912Q', 'Daniel ', 'Amer', 'daniel@gmail.com', 'España', 123456789, 'Daniel Amer', 1234567890, '03/22', '2021-05-21 17:29:54', '2021-05-21 17:29:54', 3, NULL);

INSERT INTO `empleados` (`id`, `nombre`, `contrasenya`, `createdAt`, `updatedAt`) VALUES
(4, 'Marc', '$2b$10$Aqb9b0n46j0R.a/23uCfe.edSB5YKOB1JzUInfWaF/9bzSjpnL7YK', '2021-05-31 14:05:05', '2021-05-31 14:05:05'),
(5, 'Tito', '$2b$10$JahxdBXJzl55kc3qhzGmku42wDLKPr2E6yiUeUBcNfxcg99/jUhgS', '2021-05-31 14:05:19', '2021-05-31 14:05:19'),
(6, 'Daniel', '$2b$10$fNF1nHCGDZkJZmFo4DLJF..o1D9IwHV3Z6fX7/PkXLS7yWNT6B1kC', '2021-05-31 14:05:36', '2021-05-31 14:05:36');


