-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               Microsoft SQL Server 2019 (RTM) - 15.0.2000.5
-- Server OS:                    Windows 10 Pro 10.0 <X64> (Build 19042: )
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES  */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for warehouse_database
CREATE DATABASE IF NOT EXISTS "warehouse_database";
USE "warehouse_database";

-- Dumping structure for table warehouse_database.stock
CREATE TABLE IF NOT EXISTS "stock" (
	"stockId" INT NOT NULL,
	"stock_name" VARCHAR(255) NOT NULL COLLATE 'SQL_Latin1_General_CP1_CI_AS',
	"stock_warehouse" VARCHAR(255) NOT NULL COLLATE 'SQL_Latin1_General_CP1_CI_AS',
	"stock_type" VARCHAR(255) NOT NULL COLLATE 'SQL_Latin1_General_CP1_CI_AS',
	"created_date" DATETIME NULL DEFAULT NULL,
	"updated_date" DATETIME NULL DEFAULT NULL,
	PRIMARY KEY ("stockId")
);

-- Dumping data for table warehouse_database.stock: 35 rows
/*!40000 ALTER TABLE "stock" DISABLE KEYS */;
INSERT INTO "stock" ("stockId", "stock_name", "stock_warehouse", "stock_type", "created_date", "updated_date") VALUES
	(1, 'Roadbike Alcott', 'Central Warehouse', 'Bicycle', '2022-11-06 20:34:08.810', '2022-11-06 20:34:08.810'),
	(2, 'Roadbike Scott', 'Central Warehouse', 'Bicycle', '2022-11-06 20:34:44.503', '2022-11-06 20:34:44.503'),
	(3, 'Roadbike Specialized', 'Central Warehouse', 'Bicycle', '2022-11-06 20:34:53.777', '2022-11-06 20:34:53.777'),
	(5, 'Midea Cooking Set 2022', 'Klang Valley Warehouse', 'Household', '2022-11-06 20:47:27.423', '2022-11-06 20:47:27.423'),
	(6, '6ft dinner table', 'Klang Valley Warehouse', 'Household', '2022-11-06 20:48:09.030', '2022-11-06 20:48:09.030'),
	(7, 'Concrete Bag', 'Southern Region Warehouse', 'Construction', '2022-11-06 20:50:24.610', '2022-11-06 20:50:24.610'),
	(29, 'Gravel Bike Pro-T', 'Central Warehouse', 'Bicycle', '2022-11-06 22:37:01.150', '2022-11-06 22:37:01.150'),
	(30, '5KG Rice', 'Central Warehouse', 'Food', '2022-11-06 22:38:10.513', '2022-11-06 22:38:10.513'),
	(31, 'Sardine Can', 'Central Warehouse', 'Food', '2022-11-06 22:38:17.573', '2022-11-06 22:38:17.573'),
	(32, '5KG Crabs', 'Central Warehouse', 'Food', '2022-11-06 22:41:36.527', '2022-11-06 22:41:36.527'),
	(33, 'Pencil HB', 'Central Warehouse', 'Stationery', '2022-11-06 22:42:25.410', '2022-11-06 22:42:25.410'),
	(34, 'Pencil 2B', 'Central Warehouse', 'Stationery', '2022-11-06 22:42:29.860', '2022-11-06 22:42:29.860'),
	(35, '12 Colour Pencil', 'Central Warehouse', 'Stationery', '2022-11-06 22:42:42.433', '2022-11-06 22:42:42.433'),
	(36, 'Flag WorldWide Eraser Set', 'Central Warehouse', 'Stationery', '2022-11-06 22:43:10.640', '2022-11-06 22:43:10.640'),
	(37, 'Zotac GPU RTX 3060', 'Central Warehouse', 'PC Hardware', '2022-11-06 22:43:36.313', '2022-11-06 22:43:36.313'),
	(38, 'Zotac GPU RTX 3070ti', 'Central Warehouse', 'PC Hardware', '2022-11-06 22:44:07.320', '2022-11-06 22:44:07.320'),
	(39, 'Canon Printer LMX2711', 'Central Warehouse', 'PC Hardware', '2022-11-06 22:44:21.287', '2022-11-06 22:44:21.287'),
	(40, 'Intel i5-3022', 'Central Warehouse', 'PC Hardware', '2022-11-06 22:44:52.277', '2022-11-06 22:44:52.277'),
	(41, 'Intel i7-HXT7', 'Central Warehouse', 'PC Hardware', '2022-11-06 22:45:00.607', '2022-11-06 22:45:00.607'),
	(42, 'Intel i3-PXLL', 'Central Warehouse', 'PC Hardware', '2022-11-06 22:45:12.837', '2022-11-06 22:45:12.837'),
	(43, 'HDMI Cable 2.5m', 'Central Warehouse', 'PC Hardware', '2022-11-06 22:45:23.237', '2022-11-06 22:45:23.237'),
	(44, 'HDMI Cable 30m', 'Central Warehouse', 'PC Hardware', '2022-11-06 22:45:45.907', '2022-11-06 22:45:45.907'),
	(45, 'HDMI 3.0 Cable 3m', 'Central Warehouse', 'PC Hardware', '2022-11-06 22:45:54.303', '2022-11-06 22:45:54.303'),
	(46, 'Samsung 4K monitor 24-inch', 'Central Warehouse', 'PC Hardware', '2022-11-06 22:46:13.803', '2022-11-06 22:46:13.803'),
	(47, 'Samsung 4K monitor 32-inch', 'Central Warehouse', 'PC Hardware', '2022-11-06 22:46:17.000', '2022-11-06 22:46:17.000'),
	(48, 'Samsung 4K monitor 55-inch', 'Central Warehouse', 'PC Hardware', '2022-11-06 22:46:20.763', '2022-11-06 22:46:20.763'),
	(49, 'LG 4K monitor 55-inch', 'Central Warehouse', 'PC Hardware', '2022-11-06 22:46:26.137', '2022-11-06 22:46:26.137'),
	(50, 'Playstation 4', 'Central Warehouse', 'Console Hardware', '2022-11-06 22:46:46.647', '2022-11-06 22:46:46.647'),
	(51, 'Playstation 5', 'Central Warehouse', 'Console Hardware', '2022-11-06 22:46:49.647', '2022-11-06 22:46:49.647'),
	(52, 'Playstation 1', 'Central Warehouse', 'Console Hardware', '2022-11-06 22:46:53.727', '2022-11-06 22:46:53.727'),
	(53, 'Playstation 2', 'Central Warehouse', 'Console Hardware', '2022-11-06 22:46:56.310', '2022-11-06 22:46:56.310'),
	(54, 'Playstation 3', 'Central Warehouse', 'Console Hardware', '2022-11-06 22:46:58.683', '2022-11-06 22:46:58.683'),
	(55, 'Xbox One S', 'Central Warehouse', 'Console Hardware', '2022-11-06 22:47:17.150', '2022-11-06 22:47:17.150'),
	(56, 'Xbox One X', 'Central Warehouse', 'Console Hardware', '2022-11-06 22:47:20.593', '2022-11-06 22:47:20.593'),
	(1002, 'Apple Airpod 2022', 'Central Warehouse', 'IT Hardware', '2022-11-07 23:03:47.820', '2022-11-07 23:03:47.820');
/*!40000 ALTER TABLE "stock" ENABLE KEYS */;

-- Dumping structure for table warehouse_database.user
CREATE TABLE IF NOT EXISTS "user" (
	"userId" INT NOT NULL,
	"username" VARCHAR(255) NOT NULL COLLATE 'SQL_Latin1_General_CP1_CI_AS',
	"password" VARCHAR(255) NOT NULL COLLATE 'SQL_Latin1_General_CP1_CI_AS',
	"access_level" VARCHAR(255) NULL DEFAULT NULL COLLATE 'SQL_Latin1_General_CP1_CI_AS',
	"status" INT NULL DEFAULT NULL,
	"created_date" DATETIME NULL DEFAULT NULL,
	"updated_date" DATETIME NULL DEFAULT NULL,
	PRIMARY KEY ("userId")
);

-- Dumping data for table warehouse_database.user: 22 rows
/*!40000 ALTER TABLE "user" DISABLE KEYS */;
INSERT INTO "user" ("userId", "username", "password", "access_level", "status", "created_date", "updated_date") VALUES
	(1, 'syukran', 'abc123', 'Staff', 1, '2022-11-06 23:59:24.930', NULL),
	(2, 'Syukran Soleh', 'Bossku', 'Staff', 1, '2022-11-06 23:59:24.930', NULL),
	(3, 'SyukranSS', 'ajasdj', 'Staff', 1, '2022-11-06 23:59:24.930', NULL),
	(4, 'SyukranSS', 'ajasdj', 'Staff', 1, '2022-11-06 23:59:24.930', NULL),
	(5, 'test', 'test', 'Staff', 1, '2022-11-06 23:59:24.930', NULL),
	(6, 'bob', 'bob', 'Staff', 1, '2022-11-06 23:59:24.930', NULL),
	(7, 'Amirul Ahmad', '$2b$10$Ta3Tp/M5qEufSHwQiFbWMe0TVF32TPvmZsU1q8sNLjJSHi1IDfc1W', 'Staff', 1, '2022-11-06 23:59:24.930', NULL),
	(8, 'PowerUser', '$2b$10$Ta3Tp/M5qEufSHwQiFbWMe0TVF32TPvmZsU1q8sNLjJSHi1IDfc1W', 'Admin', 1, '2022-11-07 00:23:39.250', NULL),
	(9, 'Admin', '$2b$10$YCiBVXUYfFaVDPsSJ1VgRuCORodvnKdI4JMve0Fziw5.D6eYE/zni', 'Admin', 1, '2022-11-07 00:34:33.663', '2022-11-07 00:34:33.663'),
	(10, 'Staff_1', '$2b$10$AzWCwE.ynjBX7.CAg4Pyseq3HnRjdkg.RsvMPeIodaIW8nEFBAbOi', 'Staff', 0, '2022-11-07 00:41:54.857', '2022-11-07 00:41:54.857'),
	(11, 'Staff_2', '$2b$10$YtOhxasUYhD81mmpShUeyuJHNisPAiFuuW7T0ivzSutuDyuaiKbN2', 'Staff', 0, '2022-11-07 00:42:00.497', '2022-11-07 00:42:00.497'),
	(12, 'Staff_3', '$2b$10$Fr8YQy2cP7pM3ngf3ax0S.D4xRXsPTBIadFjKVwiKM5/s2l5zIAq2', 'Staff', 0, '2022-11-07 00:42:02.647', '2022-11-07 00:42:02.647'),
	(13, 'Staff_4', '$2b$10$pACpnJtATIzG.kgMGUUrAOdpF2iyLszjdi3IYduw7o.5mordHZRt6', 'Staff', 0, '2022-11-07 00:42:06.110', '2022-11-07 00:42:06.110'),
	(14, 'Staff_5', '$2b$10$m/zaLMGD6nvc0lixHKNa2O4NBZY7s0dC4kgFa1UHiaZ5kifEUb1Pu', 'Staff', 0, '2022-11-07 00:42:08.413', '2022-11-07 00:42:08.413'),
	(15, 'Staff_6', '$2b$10$dAVktOIJXJm9YLrEwB5xnOUWsWBvkGxDQLYCIDeE5t9A1gmxB/Vae', 'Staff', 0, '2022-11-07 00:42:11.627', '2022-11-07 00:42:11.627'),
	(16, 'Staff_7', '$2b$10$yjm8KOC3CIEbq.EijviLtue47xxf9xBfky6jj8m6Bim9VAQ3l0CI.', 'Staff', 0, '2022-11-07 00:42:14.607', '2022-11-07 00:42:14.607'),
	(17, 'Staff_8', '$2b$10$OWYL1tG7gfnG0a1ysrH7wOZX1ZBbqxNK/DRNb9mhKdI6MSyHDhshi', 'Staff', 0, '2022-11-07 00:42:31.813', '2022-11-07 00:42:31.813'),
	(18, 'Staff_9', '$2b$10$P6sX0GIPuv3sFY7I25JAfONCoNnigXo89HQ93t6KiEtsr/AswZZb6', 'Staff', 0, '2022-11-07 00:42:33.803', '2022-11-07 00:42:33.803'),
	(19, 'Staff_10', '$2b$10$x3e4WMl0YNIoXhK4jtAkJ.ikacSXUachw0M9twQfs.Sp81WyGXePO', 'Staff', 0, '2022-11-07 00:42:36.810', '2022-11-07 00:42:36.810'),
	(20, 'Staff_11', '$2b$10$CHLEk0mSO16xpoF9Gc1QqO6DQXL84bibk9btVXpG30Fv9fjcRRoYa', 'Staff', 0, '2022-11-07 11:24:58.660', '2022-11-07 11:24:58.660'),
	(21, 'Checker', '$2b$10$qbGOGgBe2hMGGFnGid0w2uU8MZfk8nNL/EuMlU4MIsBLet2qLhhCS', 'Admin', 0, '2022-11-07 11:25:37.410', '2022-11-07 11:25:37.410'),
	(1009, 'John Lemon', '$2b$10$RF4uunNZgCay0KSDLksJxuzAiTjw3F218tc7UjR/ZJPZIwfG02/BW', 'Admin', 1, '2022-11-07 22:57:07.850', '2022-11-07 22:57:07.850');
/*!40000 ALTER TABLE "user" ENABLE KEYS */;

-- Dumping structure for table warehouse_database.warehouse
CREATE TABLE IF NOT EXISTS "warehouse" (
	"warehouseId" INT NOT NULL,
	"warehouseName" VARCHAR(255) NOT NULL COLLATE 'SQL_Latin1_General_CP1_CI_AS',
	"state" VARCHAR(255) NOT NULL COLLATE 'SQL_Latin1_General_CP1_CI_AS',
	"total_product" VARCHAR(255) NOT NULL COLLATE 'SQL_Latin1_General_CP1_CI_AS',
	"created_date" DATETIME NULL DEFAULT NULL,
	"updated_date" DATETIME NULL DEFAULT NULL,
	PRIMARY KEY ("warehouseId")
);

-- Dumping data for table warehouse_database.warehouse: 4 rows
/*!40000 ALTER TABLE "warehouse" DISABLE KEYS */;
INSERT INTO "warehouse" ("warehouseId", "warehouseName", "state", "total_product", "created_date", "updated_date") VALUES
	(1, 'Klang Valley Warehouse', 'Selangor', '2', '2022-11-06 20:25:27.317', '2022-11-06 20:39:03.660'),
	(2, 'Central Warehouse', 'Kuala Lumpur', '32', '2022-11-06 20:25:59.017', '2022-11-07 23:15:04.357'),
	(3, 'Southern Region Warehouse', 'Johor', '1', '2022-11-06 20:26:17.697', '2022-11-06 20:39:12.623'),
	(4, 'North Region Warehouse', 'Kedah', '0', '2022-11-06 23:36:28.130', '2022-11-06 23:36:28.130');
/*!40000 ALTER TABLE "warehouse" ENABLE KEYS */;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
