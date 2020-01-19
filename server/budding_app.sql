-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2020 at 04:58 PM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `budding_app`
--

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1);

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Akshay Gadekar', 'akshay@gmail.com', NULL, '$2y$10$FFltgrVT3a1HOfCHz7n6pODwr0Po.3WDm4sQ5pxT7Cm0jx/KpIfaO', NULL, '2020-01-14 06:01:10', '2020-01-14 06:01:10'),
(2, 'Akshay Gadekar', 'akshay_123@gmail.com', NULL, '$2y$10$RYltDthb/UQhAiNv.lRTcuOoRGjyIxy.euwigEx0gkGI1oxsTjZ6m', NULL, '2020-01-14 10:07:25', '2020-01-14 10:07:25'),
(3, 'Akshay', 'akshay@check.com', NULL, '$2y$10$MqbIV7MQbwVWWAeqr3j6feb/pBjKPG152mUxN8nVzO2zkg0T/eAUi', NULL, '2020-01-14 12:03:01', '2020-01-14 12:03:01'),
(4, 'Akshay Gadekar', 'gadekar123@gmail.com', NULL, '$2y$10$KauN612bQm1IFi/2Gvruv.TPlJ.PmwSpIbf4gbDBQr8Slh1IvUO8m', NULL, '2020-01-14 12:08:06', '2020-01-14 12:08:06'),
(5, 'Akshay', 'akshay.akky@check.com', NULL, '$2y$10$4myWR9WKaicSQCPrXmHeZ.VM7ujhDKq/1R3lH/ZVM3tvjc/bcXAl2', NULL, '2020-01-18 08:06:05', '2020-01-18 08:06:05'),
(6, 'Akshay Akki', 'akshayakky98@check.com', NULL, '$2y$10$5qTj5XpO8bUhN/d6kQpFpugOzQmvZ9TnnNrY9FpGvhR7GU86m/i7a', NULL, '2020-01-19 06:28:34', '2020-01-19 06:28:34'),
(7, 'Akshay Akky', 'akshay.gadekar.82@check.com', NULL, '$2y$10$ODm0ABhiJ7TlmAuCxOkkbult5c7YoH0Rk5PgijDizZ.DmwHSkUdde', NULL, '2020-01-19 06:30:12', '2020-01-19 06:30:12');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
