-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 16, 2022 lúc 08:41 AM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `user`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dathang`
--

CREATE TABLE `dathang` (
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `phone` int(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `diachi` varchar(30) NOT NULL,
  `noidung` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `dathang`
--

INSERT INTO `dathang` (`firstname`, `lastname`, `phone`, `email`, `diachi`, `noidung`) VALUES
('Nguyễn ', 'Hoàng', 2147483647, 'abc@gmail.com', 'Nghệ An', 'abc'),
('duc', 'bui', 2147483647, 'ducbui1211@gmail.com', 'Nghệ An', 'abc'),
('duc', 'bui', 2147483647, 'nam@gmail.com', 'Nghệ An', 'abc'),
('nam', 'giang', 2147483647, 'namgiang1@gmail.com', 'Nghệ An', 'abc'),
('NAM', 'HA', 123456333, 'namha@gmail.com', 'Vinh', 'abcd');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `dathang`
--
ALTER TABLE `dathang`
  ADD UNIQUE KEY `email` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
