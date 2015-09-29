-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 28, 2015 at 07:46 AM
-- Server version: 5.5.32
-- PHP Version: 5.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `tarotApp`
--
CREATE DATABASE IF NOT EXISTS `tarotApp` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `tarotApp`;

-- --------------------------------------------------------

--
-- Table structure for table `tarot_cards`
--

CREATE TABLE IF NOT EXISTS `tarot_cards` (
  `card_id` int(11) NOT NULL COMMENT 'Card ID',
  `name` text NOT NULL COMMENT 'Card Name',
  `suit` text COMMENT 'Card Suit',
  PRIMARY KEY (`card_id`),
  UNIQUE KEY `card_id` (`card_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Cards of the Tarot Deck';

--
-- Dumping data for table `tarot_cards`
--

INSERT INTO `tarot_cards` (`card_id`, `name`, `suit`) VALUES
(0, 'The Fool', 'major'),
(1, 'The Magician', 'major'),
(2, 'The High Priestess', 'major'),
(3, 'The Empress', 'major'),
(4, 'The Emperor', 'major'),
(5, 'The Hierophant', 'major'),
(6, 'The Lovers', 'major'),
(7, 'The Chariot', 'major'),
(8, 'Strength', 'major'),
(9, 'The Hermit', 'major'),
(10, 'Wheel of Fortune', 'major'),
(11, 'Justice', 'major'),
(12, 'The Hanged Man', 'major'),
(13, 'Death', 'major'),
(14, 'Temperance', 'major'),
(15, 'The Devil', 'major'),
(16, 'The Tower', 'major'),
(17, 'The Star', 'major'),
(18, 'The Moon', 'major'),
(19, 'The Sun', 'major'),
(20, 'Judgement', 'major'),
(21, 'The World', 'major'),
(22, 'Ace of Wands', 'wands'),
(23, 'Two of Wands', 'wands'),
(24, 'Three of Wands', 'wands'),
(25, 'Four of Wands', 'wands'),
(26, 'Five of Wands', 'wands'),
(27, 'Six of Wands', 'wands'),
(28, 'Seven of Wands', 'wands'),
(29, 'Eight of Wands', 'wands'),
(30, 'Nine of Wands', 'wands'),
(31, 'Ten of Wands', 'wands'),
(32, 'Page of Wands', 'wands'),
(33, 'Knight of Wands', 'wands'),
(34, 'Queen of Wands', 'wands'),
(35, 'King of Wands', 'wands'),
(36, 'Ace of Cups', 'cups'),
(37, 'Two of Cups', 'cups'),
(38, 'Three of Cups', 'cups'),
(39, 'Four of Cups', 'cups'),
(40, 'Five of Cups', 'cups'),
(41, 'Six of Cups', 'cups'),
(42, 'Seven of Cups', 'cups'),
(43, 'Eight of Cups', 'cups'),
(44, 'Nine of Cups', 'cups'),
(45, 'Ten of Cups', 'cups'),
(46, 'Page of Cups', 'cups'),
(47, 'Knight of Cups', 'cups'),
(48, 'Queen of Cups', 'cups'),
(49, 'King of Cups', 'cups'),
(50, 'Ace of Swords', 'swords'),
(51, 'Two of Swords', 'swords'),
(52, 'Three of Swords', 'swords'),
(53, 'Four of Swords', 'swords'),
(54, 'Five of Swords', 'swords'),
(55, 'Six of Swords', 'swords'),
(56, 'Seven of Swords', 'swords'),
(57, 'Eight of Swords', 'swords'),
(58, 'Nine of Swords', 'swords'),
(59, 'Ten of Swords', 'swords'),
(60, 'Page of Swords', 'swords'),
(61, 'Knight of Swords', 'swords'),
(62, 'Queen of Swords', 'swords'),
(63, 'King of Swords', 'swords'),
(64, 'Ace of Pentacles', 'pentacles'),
(65, 'Two of Pentacles', 'pentacles'),
(66, 'Three of Pentacles', 'pentacles'),
(67, 'Four of Pentacles', 'pentacles'),
(68, 'Five of Pentacles', 'pentacles'),
(69, 'Six of Pentacles', 'pentacles'),
(70, 'Seven of Pentacles', 'pentacles'),
(71, 'Eight of Pentacles', 'pentacles'),
(72, 'Nine of Pentacles', 'pentacles'),
(73, 'Ten of Pentacles', 'pentacles'),
(74, 'Page of Pentacles', 'pentacles'),
(75, 'Knight of Pentacles', 'pentacles'),
(76, 'Queen of Pentacles', 'pentacles'),
(77, 'King of Pentacles', 'pentacles');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
