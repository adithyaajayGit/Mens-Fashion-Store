-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 17, 2024 at 12:06 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_mensfashionstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_bookingdetails`
--

CREATE TABLE IF NOT EXISTS `tbl_bookingdetails` (
  `details_id` int(11) NOT NULL AUTO_INCREMENT,
  `master_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total_price` int(11) NOT NULL,
  PRIMARY KEY (`details_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=48 ;

--
-- Dumping data for table `tbl_bookingdetails`
--

INSERT INTO `tbl_bookingdetails` (`details_id`, `master_id`, `product_id`, `quantity`, `total_price`) VALUES
(1, 1, 4, 1, 40),
(4, 3, 4, 1, 40),
(5, 4, 4, 1, 40),
(6, 5, 4, 2, 80),
(7, 6, 4, 2, 80),
(8, 7, 4, 2, 80),
(9, 8, 4, 2, 80),
(10, 9, 9, 1, 44),
(11, 10, 9, 1, 44),
(12, 11, 4, 1, 40),
(13, 12, 12, 1, 56),
(14, 13, 4, 2, 80),
(15, 14, 6, 1, 20),
(16, 15, 7, 1, 350),
(17, 16, 6, 1, 20),
(18, 17, 4, 2, 80),
(19, 18, 7, 1, 350),
(20, 19, 7, 1, 350),
(21, 20, 7, 1, 350),
(22, 21, 7, 1, 350),
(23, 22, 7, 1, 350),
(24, 23, 4, 1, 40),
(25, 24, 4, 1, 40),
(26, 25, 4, 1, 40),
(27, 26, 13, 1, 250),
(28, 27, 39, 1, 900),
(29, 28, 30, 1, 250),
(30, 29, 6, 2, 860),
(31, 30, 7, 1, 350),
(32, 31, 27, 1, 400),
(33, 32, 7, 1, 350),
(34, 33, 6, 2, 860),
(35, 34, 29, 1, 280),
(36, 35, 42, 1, 800),
(37, 36, 43, 1, 900),
(38, 37, 14, 1, 500),
(39, 38, 14, 1, 500),
(40, 39, 14, 1, 500),
(41, 40, 15, 1, 450),
(42, 41, 44, 1, 850),
(43, 42, 27, 1, 400),
(44, 43, 35, 1, 259),
(45, 44, 36, 1, 290),
(46, 45, 33, 1, 250),
(47, 46, 7, 1, 350);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_bookingmaster`
--

CREATE TABLE IF NOT EXISTS `tbl_bookingmaster` (
  `master_id` int(11) NOT NULL AUTO_INCREMENT,
  `login_id` int(11) NOT NULL,
  `total_amount` int(11) NOT NULL,
  `status` varchar(30) NOT NULL,
  `booking_date` date NOT NULL,
  PRIMARY KEY (`master_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=47 ;

--
-- Dumping data for table `tbl_bookingmaster`
--

INSERT INTO `tbl_bookingmaster` (`master_id`, `login_id`, `total_amount`, `status`, `booking_date`) VALUES
(1, 8, 40, 'requested', '2024-02-27'),
(3, 9, 40, 'paid', '2024-02-27'),
(4, 8, 40, 'paid', '2024-02-27'),
(5, 8, 80, 'requested', '2024-02-27'),
(6, 9, 80, 'paid', '2024-02-27'),
(7, 8, 80, 'paid', '2024-02-27'),
(8, 8, 80, 'paid', '2024-02-27'),
(9, 8, 44, 'paid', '2024-02-27'),
(10, 9, 44, 'paid', '2024-02-28'),
(11, 8, 40, 'requested', '2024-03-05'),
(12, 8, 56, 'paid', '2024-03-06'),
(13, 8, 80, 'requested', '2024-03-06'),
(14, 39, 20, 'paid', '2024-03-08'),
(15, 35, 350, 'paid', '2024-03-08'),
(16, 9, 20, 'paid', '2024-03-08'),
(17, 8, 80, 'paid', '2024-03-08'),
(18, 9, 350, 'requested', '2024-03-08'),
(19, 9, 350, 'requested', '2024-03-08'),
(20, 9, 350, 'requested', '2024-03-08'),
(21, 9, 350, 'requested', '2024-03-08'),
(22, 9, 350, 'paid', '2024-03-08'),
(23, 8, 40, 'requested', '2024-03-08'),
(24, 8, 40, 'paid', '2024-03-08'),
(25, 9, 40, 'paid', '2024-03-09'),
(26, 9, 250, 'paid', '2024-03-09'),
(27, 9, 900, 'paid', '2024-03-10'),
(28, 8, 250, 'paid', '2024-03-10'),
(29, 9, 860, 'paid', '2024-03-11'),
(30, 9, 350, 'paid', '2024-03-11'),
(31, 9, 400, 'paid', '2024-03-12'),
(32, 8, 350, 'paid', '2024-03-12'),
(33, 9, 860, 'paid', '2024-03-12'),
(34, 8, 280, 'requested', '2024-04-15'),
(35, 8, 800, 'paid', '2024-04-15'),
(36, 8, 900, 'paid', '2024-04-15'),
(37, 9, 500, 'requested', '2024-04-16'),
(38, 9, 500, 'requested', '2024-04-16'),
(39, 9, 500, 'paid', '2024-04-16'),
(40, 8, 450, 'paid', '2024-04-16'),
(41, 8, 850, 'paid', '2024-04-16'),
(42, 9, 400, 'paid', '2024-04-16'),
(43, 9, 259, 'paid', '2024-04-16'),
(44, 8, 290, 'paid', '2024-04-16'),
(45, 43, 250, 'paid', '2024-04-16'),
(46, 44, 350, 'paid', '2024-04-17');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_brand`
--

CREATE TABLE IF NOT EXISTS `tbl_brand` (
  `brand_id` int(22) NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(32) NOT NULL,
  `brand_image` text NOT NULL,
  PRIMARY KEY (`brand_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `tbl_brand`
--

INSERT INTO `tbl_brand` (`brand_id`, `brand_name`, `brand_image`) VALUES
(3, 'adidas', 'Adidaslogo.png'),
(7, 'Puma', 'pumalogo.png'),
(13, 'luis philippi', 'download.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cart`
--

CREATE TABLE IF NOT EXISTS `tbl_cart` (
  `cart_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `login_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total_amount` int(11) NOT NULL,
  PRIMARY KEY (`cart_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=57 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

CREATE TABLE IF NOT EXISTS `tbl_category` (
  `category_id` int(22) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(22) NOT NULL,
  `category_image` text NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`category_id`, `category_name`, `category_image`) VALUES
(1, 'Shirt', 'shirrtimage.jpg'),
(4, 'Tshirt', 'Snapinsta.app_428701903_17961927533713729_7060937428369811123_n_1080.jpg'),
(5, 'Pants', 'pants.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_customer`
--

CREATE TABLE IF NOT EXISTS `tbl_customer` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `login_id` int(11) NOT NULL,
  `customer_name` varchar(50) NOT NULL,
  `customer_email` varchar(50) NOT NULL,
  `customer_contactno` bigint(20) NOT NULL,
  `district_id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  `customer_pincode` bigint(20) NOT NULL,
  `customer_regdate` date NOT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=39 ;

--
-- Dumping data for table `tbl_customer`
--

INSERT INTO `tbl_customer` (`customer_id`, `login_id`, `customer_name`, `customer_email`, `customer_contactno`, `district_id`, `location_id`, `customer_pincode`, `customer_regdate`) VALUES
(1, 7, 'Adithya', 'adithyaajay63@gmail.com', 474747, 1, 6, 74747, '2024-01-23'),
(2, 8, 'Adhithya Ajay', 'adithyaajay63@gmail.com', 123456778, 1, 12, 685608, '2024-01-23'),
(3, 9, 'alen', 'alen@gmail.com', 637383839, 1, 9, 337383, '2024-02-20'),
(15, 21, 'wswxw', 'adithyaajay098@gmail.com', 443, 1, 6, 33, '2024-02-22'),
(16, 22, 'wswxw', 'adithyaajay098@gmail.com', 57, 1, 6, 678, '2024-02-22'),
(27, 33, 'Adithya Ajay', 'adithyaajay098@gmail.com', 908756898, 1, 6, 878987, '2024-02-28'),
(28, 34, 'Wswxw', 'adithyaajay098@gmail.com', 233344738, 1, 6, 567837, '2024-03-01'),
(29, 35, 'Adithyaaaaaaaa', 'adithyaajay098@gmail.com', 123456789, 1, 6, 765876, '2024-03-01'),
(30, 36, 'Ad', 'adithyaajay098@gmail.com', 848487866, 1, 6, 756788, '2024-03-01'),
(31, 37, 'Adithyan R', 'adithyaajay098@gmail.com', 272838733, 1, 6, 362728, '2024-03-01'),
(32, 38, 'Ahbsjhbd', 'adithyaajay098@gmail.com', 236273627, 1, 6, 236265, '2024-03-01'),
(33, 39, 'Arjun', 'adithyaajay098@gmail.com', 123456789, 1, 6, 685608, '2024-03-05'),
(34, 40, 'Adithya', 'adithyaajay098@gmail.com', 737283787, 2, 8, 232362, '2024-03-05'),
(35, 41, 'Abxnb', 'adithyaajay098@gmail.com', 376377632, 2, 8, 271661, '2024-03-05'),
(36, 42, 'Alen Abilash', 'alenabhilash2@gmail.com', 562728872, 1, 10, 767386, '2024-04-16'),
(37, 43, 'Athul', 'adithyaajay098@gmail.com', 628272828, 10, 40, 262726, '2024-04-16'),
(38, 44, 'Adithya Ajay', 'adithyaajay098@gmail.com', 123456789, 2, 17, 746474, '2024-04-17');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_delivery`
--

CREATE TABLE IF NOT EXISTS `tbl_delivery` (
  `delivery_id` int(11) NOT NULL AUTO_INCREMENT,
  `login_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `housename` varchar(20) NOT NULL,
  `district_id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  `pincode` bigint(20) NOT NULL,
  `landmark` varchar(20) NOT NULL,
  `contactno` bigint(20) NOT NULL,
  PRIMARY KEY (`delivery_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=22 ;

--
-- Dumping data for table `tbl_delivery`
--

INSERT INTO `tbl_delivery` (`delivery_id`, `login_id`, `name`, `housename`, `district_id`, `location_id`, `pincode`, `landmark`, `contactno`) VALUES
(1, 9, 'alen', 'alenhouse', 2, 8, 685698, 'near bridge', 804836829),
(2, 8, ' v fd', 'dmcmd', 1, 6, 232232, 'c dsm v', 123212323),
(3, 9, 'knkn', 'jbnb', 1, 6, 787878, ' n n n n ', 787878787),
(4, 9, 'bbn b', 'bn  ', 1, 9, 868686, 'vhvhvh', 776767667),
(5, 9, 'Alen', 'alenhouse', 1, 6, 685608, 'near alangat', 839383822),
(6, 8, 'adithya', 'adithyahouse', 1, 6, 372832, 'near temple', 237272938),
(7, 9, 'ALEN', 'CFCF', 1, 6, 578687, 'NEAR LUIU', 878787997),
(8, 9, 'tets', 'snbhs', 1, 6, 362762, 'cbbs', 328278278),
(9, 9, 'hvhv', 'bhjbhj', 1, 6, 676767, 'nbvbnb', 786666768),
(10, 8, 'Adithya', 'Adithyahouse', 1, 6, 564675, 'gfgg', 785667776),
(11, 9, 'fafgg', 'wghw', 1, 6, 655775, 'nggg', 575776775),
(12, 8, 'Adi', 'house', 1, 6, 235678, 'eng', 562972672),
(13, 8, 'ADHI', 'X N', 12, 47, 376377, 'BXHSBHB', 626882728),
(14, 9, 'adhi', 'aab', 1, 6, 568646, 'fghh', 678686886),
(15, 8, 'adhhh', 'bjbjb', 1, 12, 767636, 'xb nn', 267237282),
(16, 8, 'cgdjx', 'mjxjdg', 7, 25, 637382, 'mjdbdjbdjbj', 376383873),
(17, 9, 'hfghv', 'jbjbj', 1, 9, 677675, 'bjhjbj', 575767678),
(18, 9, 'jjn', 'jcjjc', 2, 18, 888383, 'jcjnj', 737872828),
(19, 8, 'jncjdn', 'cjcjs', 1, 6, 383838, 'sdnjndj', 282829282),
(20, 43, 'athul', 'athulhouse', 4, 19, 272828, 'sjbjxsjs', 272829222),
(21, 44, 'adithya', 'adithyahouse', 1, 6, 647484, 'near', 749474847);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_district`
--

CREATE TABLE IF NOT EXISTS `tbl_district` (
  `district_id` int(15) NOT NULL AUTO_INCREMENT,
  `district_name` varchar(30) NOT NULL,
  PRIMARY KEY (`district_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `tbl_district`
--

INSERT INTO `tbl_district` (`district_id`, `district_name`) VALUES
(1, 'idukki'),
(2, 'eranakulam'),
(4, 'Alappuzha'),
(7, 'Kannur'),
(8, 'Kasaragod'),
(9, 'Kollam'),
(10, 'Kottayam'),
(11, 'Kozhikode'),
(12, 'Malappuram'),
(13, 'Palakkad'),
(14, 'Pathanamthitta'),
(15, 'Thiruvananthapuram'),
(16, 'Thrissur'),
(17, 'Wayanad');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_location`
--

CREATE TABLE IF NOT EXISTS `tbl_location` (
  `location_id` int(22) NOT NULL AUTO_INCREMENT,
  `district_id` int(11) NOT NULL,
  `location_name` varchar(20) NOT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=50 ;

--
-- Dumping data for table `tbl_location`
--

INSERT INTO `tbl_location` (`location_id`, `district_id`, `location_name`) VALUES
(6, 1, 'thodupuzha'),
(8, 2, 'Muvattupuzha'),
(9, 1, 'muttam'),
(10, 1, 'manakad'),
(12, 1, 'Vazhithala'),
(13, 7, 'Ramapuram'),
(15, 0, ' njn'),
(16, 2, 'kothamangalam'),
(17, 2, 'aluva'),
(18, 2, 'perumbavoor'),
(19, 4, 'Ambalappuzha'),
(20, 4, 'haripad'),
(21, 4, 'Chettikulangara'),
(22, 4, 'Kayamkulam'),
(23, 7, 'Thalassery'),
(24, 7, 'Parassinikadavu'),
(25, 7, 'Arakkal'),
(26, 7, 'Dharmadam'),
(27, 8, 'Bekal'),
(28, 8, 'Ananthapura'),
(29, 8, 'Nileshwar'),
(30, 8, 'Madhur'),
(31, 8, 'Ranipuram'),
(32, 8, 'Kappil'),
(33, 9, 'Ashtamudi'),
(34, 9, 'Thangassery'),
(35, 9, 'Palaruvi'),
(36, 9, 'Thenmala'),
(37, 9, 'Neendakara'),
(38, 10, 'Kumarakom'),
(39, 10, 'Vaikom'),
(40, 10, 'Ettumanoor'),
(41, 10, 'Thirunakkara'),
(42, 11, 'Beypore'),
(43, 11, 'Kakkayam'),
(44, 11, 'Thikkoti'),
(45, 11, 'Peruvannamuzhi'),
(46, 11, 'Calicut city'),
(47, 12, 'nilambur'),
(48, 12, 'Kottakkunnu'),
(49, 12, 'Adyanpara');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_login`
--

CREATE TABLE IF NOT EXISTS `tbl_login` (
  `login_id` int(15) NOT NULL AUTO_INCREMENT,
  `login_username` varchar(20) NOT NULL,
  `login_password` varchar(20) NOT NULL,
  `role` varchar(20) NOT NULL,
  PRIMARY KEY (`login_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=45 ;

--
-- Dumping data for table `tbl_login`
--

INSERT INTO `tbl_login` (`login_id`, `login_username`, `login_password`, `role`) VALUES
(1, 'ADMIN', 'ADMIN', 'ADMIN'),
(8, 'aadhii', '123', 'customer'),
(9, 'alen', '123', 'customer'),
(21, 'wswxw', '345', 'customer'),
(22, 'vhhj', '57', 'customer'),
(33, 'Adithya', '345', 'customer'),
(34, 'aa', 'OOpmN1QH', 'customer'),
(35, 'alenn', '345678', 'customer'),
(36, 'alennnn', '7849', 'customer'),
(37, 'zz', '3627', 'customer'),
(38, 'alennnnnnnnnnnnnnn', '6562', 'customer'),
(39, 'arjun', '1234', 'customer'),
(40, 'xbxsm', 'xsxsx', 'customer'),
(41, 'axax', '232632', 'customer'),
(42, 'alennn', '123', 'customer'),
(43, 'athul123', '1234', 'customer'),
(44, 'adi', '123', 'customer');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_payment`
--

CREATE TABLE IF NOT EXISTS `tbl_payment` (
  `payment_id` int(11) NOT NULL AUTO_INCREMENT,
  `master_id` int(11) NOT NULL,
  `total_amount` int(11) NOT NULL,
  `date` date NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`payment_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=35 ;

--
-- Dumping data for table `tbl_payment`
--

INSERT INTO `tbl_payment` (`payment_id`, `master_id`, `total_amount`, `date`, `status`) VALUES
(2, 3, 40, '2024-02-27', 'paid'),
(3, 4, 40, '2024-02-27', 'paid'),
(4, 6, 80, '2024-02-27', 'paid'),
(5, 7, 80, '2024-02-27', 'paid'),
(6, 8, 80, '2024-02-27', 'paid'),
(7, 9, 44, '2024-02-27', 'paid'),
(8, 10, 44, '2024-02-28', 'paid'),
(9, 12, 56, '2024-03-06', 'paid'),
(10, 14, 20, '2024-03-08', 'paid'),
(11, 15, 350, '2024-03-08', 'paid'),
(12, 16, 20, '2024-03-08', 'paid'),
(13, 17, 80, '2024-03-08', 'paid'),
(14, 22, 350, '2024-03-08', 'paid'),
(15, 24, 40, '2024-03-08', 'paid'),
(16, 25, 40, '2024-03-09', 'paid'),
(17, 26, 250, '2024-03-09', 'paid'),
(18, 27, 900, '2024-03-10', 'paid'),
(19, 28, 250, '2024-03-10', 'paid'),
(20, 29, 860, '2024-03-11', 'paid'),
(21, 30, 350, '2024-03-11', 'paid'),
(22, 31, 400, '2024-03-12', 'paid'),
(23, 32, 350, '2024-03-12', 'paid'),
(24, 33, 860, '2024-03-12', 'paid'),
(25, 35, 800, '2024-04-15', 'paid'),
(26, 36, 900, '2024-04-15', 'paid'),
(27, 39, 500, '2024-04-16', 'paid'),
(28, 40, 450, '2024-04-16', 'paid'),
(29, 41, 850, '2024-04-16', 'paid'),
(30, 42, 400, '2024-04-16', 'paid'),
(31, 43, 259, '2024-04-16', 'paid'),
(32, 44, 290, '2024-04-16', 'paid'),
(33, 45, 250, '2024-04-16', 'paid'),
(34, 46, 350, '2024-04-17', 'paid');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product`
--

CREATE TABLE IF NOT EXISTS `tbl_product` (
  `product_id` int(50) NOT NULL AUTO_INCREMENT,
  `category_id` int(50) NOT NULL,
  `brand_id` int(50) NOT NULL,
  `product_name` varchar(25) NOT NULL,
  `product_size` float NOT NULL,
  `product_colour` varchar(55) NOT NULL,
  `product_image` text NOT NULL,
  `price` varchar(22) NOT NULL,
  `stock` int(11) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=49 ;

--
-- Dumping data for table `tbl_product`
--

INSERT INTO `tbl_product` (`product_id`, `category_id`, `brand_id`, `product_name`, `product_size`, `product_colour`, `product_image`, `price`, `stock`) VALUES
(4, 1, 3, 'redshirt12', 39, 'dark red', 'Snapinsta.app_341018351_1177487482913263_8927375004349511477_n_1080-01.jpeg.jpg', '250', 13),
(6, 1, 3, 'adidasblueshirt', 39, 'blue', 'adi.jpg', '430', 2),
(7, 1, 3, 'pinkish-shirt', 40, 'pink', 'WhatsApp Image 2024-03-10 at 16.32.40_889748ae.jpg', '350', 0),
(10, 1, 7, 'light b puma shirt', 42, 'light blue', 'WhatsApp Image 2024-03-10 at 16.36.50_3d9dd4f2.jpg', '33', 0),
(12, 4, 3, 'white t-shirt', 36, 'white', 'WhatsApp Image 2024-03-10 at 18.06.05_cd855b65.jpg', '300', 13),
(14, 1, 3, 'vintage shirt', 39, 'blue', 'WhatsApp Image 2024-03-10 at 17.25.07_86d58ab6.jpg', '500', 12),
(15, 1, 3, 'striped shirt', 38, 'blue', 'WhatsApp Image 2024-03-10 at 16.42.18_be6cc196.jpg', '450', 12),
(16, 1, 3, 'pattern shirt', 36, 'white', 'Screenshot_2024-03-10-17-07-59-092_com.instagram.android-01.jpeg.jpg', '400', 13),
(17, 1, 3, 'checky-style shirt', 40, 'white', 'Screenshot_2024-03-10-17-11-02-283_com.instagram.android-01.jpeg.jpg', '420', 13),
(18, 1, 3, 'yellowish-welvet', 42, 'yellow', 'WhatsApp Image 2024-03-10 at 17.21.04_296dfe99.jpg', '500', 13),
(19, 1, 7, 'white with black print', 38, 'white', 'Snapinsta.app_432311764_1105523580872909_7119121946504391319_n_1080.jpg', '400', 13),
(20, 1, 7, 'grey formal', 36, 'grey', 'Snapinsta.app_431506742_1540381150089383_4250631252144302398_n_1080.jpg', '380', 13),
(21, 1, 7, 'pinky style', 42, 'pink', 'Snapinsta.app_369406356_613682394252931_2287199754358247922_n_1080.jpg', '420', 13),
(22, 1, 13, 'green style', 40, 'green', 'Snapinsta.app_368192454_969446794340555_7829327842606124150_n_1080.jpg', '400', 13),
(23, 1, 13, 'red velvet', 39, 'red', 'Snapinsta.app_366428531_1505292456945844_4630658884297863755_n_1080.jpg', '400', 13),
(24, 1, 13, 'white formals', 42, 'white', 'Snapinsta.app_366031009_1692251631196405_8743758914740616266_n_1080.jpg', '450', 13),
(25, 1, 13, 'brown formals', 40, 'brown', 'Snapinsta.app_365430024_684070153740053_7901891100429040216_n_1080.jpg', '430', 13),
(26, 4, 3, 'trendy t-shirt', 39, 'white', 'Snapinsta.app_425325797_3859584337650362_6055617324523656960_n_1080.jpg', '400', 2),
(27, 4, 3, 'mode shirt', 38, 'blue', 'Snapinsta.app_425467455_279778748225079_4119893089306662144_n_1080.jpg', '400', 1),
(28, 4, 3, 'epic shirt', 38, 'grey', 'Snapinsta.app_425218407_791545152798841_5639553865699893424_n_1080.jpg', '380', 0),
(29, 4, 7, 'chelsea', 38, 'blue', 'Snapinsta.app_373297882_17937087989713729_8395939757521383576_n_1080.jpg', '280', 13),
(30, 4, 7, 'city t shirt', 38, 'blue', 'Snapinsta.app_372820165_17937088016713729_990732863180309516_n_1080.jpg', '250', 12),
(31, 4, 7, 'barca tshirt', 38, 'red', 'Snapinsta.app_372642718_17937088025713729_8358375814300851472_n_1080.jpg', '250', 13),
(32, 4, 7, 'united', 39, 'red', 'Snapinsta.app_372620645_17937087971713729_138965800030758637_n_1080.jpg', '250', 13),
(33, 4, 13, 'browne one', 37, 'brown', 'Snapinsta.app_381582605_17940019328713729_8017218153400758477_n_1080.jpg', '250', 12),
(34, 4, 13, 'green tshirt-12', 38, 'green', 'Snapinsta.app_381574252_17940019310713729_8494440046874050388_n_1080.jpg', '300', 13),
(35, 4, 13, 'dark tshirt', 40, 'black', 'Snapinsta.app_381558066_17940019319713729_6211848457949860569_n_1080.jpg', '259', 12),
(36, 4, 13, 'tshirt luiz', 39, 'velvet', 'Snapinsta.app_380352073_17940019337713729_2490041310708661537_n_1080.jpg', '290', 12),
(37, 5, 3, 'greybaggy', 36, 'grey', 'Snapinsta.app_425822625_1398502047466239_877029051013501411_n_1080.jpg', '800', 13),
(38, 5, 3, 'blackpants', 34, 'black', 'Snapinsta.app_426685900_701703168701784_1761173778823765384_n_1080.jpg', '850', 2),
(39, 5, 3, 'jeansloosey', 34, 'blue', 'Snapinsta.app_425961622_1570018023846546_1183786824092510658_n_1080.jpg', '900', 1),
(40, 5, 3, 'greenbaggy', 32, 'green', 'Snapinsta.app_425773890_1350271345675899_2670809593635093326_n_1080.jpg', '750', 0),
(41, 5, 7, 'enlarged', 38, 'green', 'Snapinsta.app_426202085_237748536054199_7697597515561969234_n_1080.jpg', '490', 13),
(42, 5, 7, 'greylarged', 39, 'grey', 'Snapinsta.app_426126685_361264810160416_2832544251171852439_n_1080.jpg', '800', 12),
(43, 5, 7, 'Pumz', 34, 'blue', 'Snapinsta.app_416868348_1061809178300660_5650671049050285931_n_1080.jpg', '900', 12),
(44, 5, 7, 'greyvintage', 38, 'grey', 'Snapinsta.app_425254203_625109856411405_7757628349826746547_n_1080.jpg', '850', 12),
(45, 5, 13, 'vintageblue', 39, 'blue', 'Snapinsta.app_425427825_927575109075763_872704302328777030_n_1080.jpg', '800', 13),
(46, 5, 13, 'luizexclusive1', 38, 'black', 'Snapinsta.app_412579887_1895457894246098_7542338326479923167_n_1080.jpg', '900', 13),
(47, 5, 13, 'luizexclusive2', 36, 'cream', 'Snapinsta.app_413428961_799774135493214_5315449753970739233_n_1080.jpg', '860', 13),
(48, 5, 13, 'luizexclusive3', 34, 'cream', 'Snapinsta.app_412651442_322417594036946_7974076196450140443_n_1080.jpg', '680', 13);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_stock`
--

CREATE TABLE IF NOT EXISTS `tbl_stock` (
  `stock_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `newstock` int(11) NOT NULL,
  `stock_date` date NOT NULL,
  PRIMARY KEY (`stock_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=66 ;

--
-- Dumping data for table `tbl_stock`
--

INSERT INTO `tbl_stock` (`stock_id`, `product_id`, `newstock`, `stock_date`) VALUES
(1, 4, 63, '2024-02-26'),
(2, 4, 3, '2024-02-26'),
(3, 5, 2, '2024-02-26'),
(4, 4, 1, '2024-02-26'),
(5, 5, 1, '2024-02-26'),
(6, 4, 4, '2024-02-26'),
(7, 5, 1, '2024-02-26'),
(8, 4, 0, '2024-02-27'),
(9, 4, 1, '2024-02-27'),
(10, 4, 1, '2024-02-27'),
(11, 5, 1, '2024-02-27'),
(12, 4, 1, '2024-02-27'),
(13, 9, 1, '2024-02-28'),
(14, 4, 2, '2024-03-04'),
(15, 6, 2, '2024-03-05'),
(16, 7, 2, '2024-03-05'),
(17, 12, 2, '2024-03-06'),
(18, 4, 2, '2024-03-08'),
(19, 4, 3, '2024-03-09'),
(20, 6, 2, '2024-03-09'),
(21, 7, 1, '2024-03-09'),
(22, 13, 1, '2024-03-09'),
(23, 13, 2, '2024-03-09'),
(24, 4, 13, '2024-03-10'),
(25, 15, 13, '2024-03-10'),
(26, 16, 13, '2024-03-10'),
(27, 17, 13, '2024-03-10'),
(28, 18, 13, '2024-03-10'),
(29, 10, 13, '2024-03-10'),
(30, 19, 13, '2024-03-10'),
(31, 20, 13, '2024-03-10'),
(32, 21, 13, '2024-03-10'),
(33, 22, 13, '2024-03-10'),
(34, 23, 13, '2024-03-10'),
(35, 24, 13, '2024-03-10'),
(36, 25, 13, '2024-03-10'),
(37, 12, 13, '2024-03-10'),
(38, 26, 2, '2024-03-10'),
(39, 27, 1, '2024-03-10'),
(40, 28, 13, '2024-03-10'),
(41, 29, 13, '2024-03-10'),
(42, 30, 13, '2024-03-10'),
(43, 31, 13, '2024-03-10'),
(44, 32, 13, '2024-03-10'),
(45, 33, 13, '2024-03-10'),
(46, 34, 13, '2024-03-10'),
(47, 35, 13, '2024-03-10'),
(48, 36, 13, '2024-03-10'),
(49, 37, 13, '2024-03-10'),
(50, 38, 2, '2024-03-10'),
(51, 39, 1, '2024-03-10'),
(52, 41, 13, '2024-03-10'),
(53, 42, 13, '2024-03-10'),
(54, 43, 13, '2024-03-10'),
(55, 44, 13, '2024-03-10'),
(56, 45, 13, '2024-03-10'),
(57, 46, 13, '2024-03-10'),
(58, 47, 13, '2024-03-10'),
(59, 48, 13, '2024-03-10'),
(60, 6, 2, '2024-03-11'),
(61, 7, 1, '2024-03-11'),
(62, 27, 1, '2024-03-12'),
(63, 27, 1, '2024-04-16'),
(64, 6, 2, '2024-04-16'),
(65, 7, 1, '2024-04-16');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
