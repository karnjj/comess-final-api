CREATE DATABASE  IF NOT EXISTS `comess` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `comess`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: comess
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `problem`
--

DROP TABLE IF EXISTS `problem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `problem` (
  `id` int NOT NULL,
  `answer` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `choices` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `problem`
--

LOCK TABLES `problem` WRITE;
/*!40000 ALTER TABLE `problem` DISABLE KEYS */;
INSERT INTO `problem` VALUES (0,'ผัดไทย','[\"ส้มตำ\", \"ผัดไทย\", \"ลาซานญ่า\", \"ราเมน\", \"สปาเกตตี\", \"ต้มยำกุ้ง\"]'),(1,'ส้มตำ','[\"ทาโกยากิ\", \"ยากิโซบะ\", \"แกงเขียวหวาน\", \"ผัดไทย\", \"ส้มตำ\", \"ไก่ย่าง\"]'),(2,'แกงมัสมั่น','[\"แกงเขียวหวาน\", \"แกงกะหรี่\", \"ราเมน\", \"แกงมัสมั่น\", \"ต้มยำกุ้ง\", \"พิซซ่า\"]'),(3,'ลาซานญ่า','[\"ส้มตำ\", \"แฮมเบอร์เกอร์\", \"พิซซ่า\", \"สปาเกตตี\", \"แกงกะหรี่\", \"ลาซานญ่า\"]'),(4,'ราเมน','[\"ราเมน\", \"สปาเกตตี\", \"แกงเขียวหวาน\", \"สเต๊ก\", \"ผัดไทย\", \"ต้มยำกุ้ง\"]'),(5,'เป็ดปักกิ่ง','[\"หมูหัน\", \"ไก่ย่าง\", \"ซาชิมิ\", \"เป็ดปักกิ่ง\", \"ติ่มซำ\", \"เคบับ\"]'),(6,'ต้มยำกุ้ง','[\"แกงเขียวหวาน\", \"ต้มยำกุ้ง\", \"แกงมัสมั่น\", \"ราเมน\", \"ทาโกยากิ\", \"ยากิโซบะ\"]'),(7,'ปูผัดผงกะหรี่','[\"ปูนึ่ง\", \"หอยทอด\", \"แกงกระหรี่\", \"สปาเกตตี\", \"ปูผัดผงกะหรี่\", \"ส้มตำ\"]'),(8,'แหนมเนือง','[\"สลัด\", \"ยำ\", \"แหนมเนือง\", \"สเต๊ก\", \"ไก่ย่าง\", \"ข้าวมันไก่\"]'),(9,'ข้าวซอย','[\"ราเมน\", \"ต้มยำ\", \"แกงมัสมั่น\", \"แกงกะหรี่\", \"ข้าวซอย\", \"กระเพราะปลา\"]');
/*!40000 ALTER TABLE `problem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room` (
  `id` int NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `nProblem` int DEFAULT NULL,
  `start` bigint DEFAULT NULL,
  `problems` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `score` int DEFAULT NULL,
  `roomId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'comess'
--

--
-- Dumping routines for database 'comess'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-02 16:59:29
