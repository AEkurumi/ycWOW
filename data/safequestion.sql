/*
Navicat MySQL Data Transfer

Source Server         : bbb
Source Server Version : 50513
Source Host           : 127.0.0.1:3306
Source Database       : wow

Target Server Type    : MYSQL
Target Server Version : 50513
File Encoding         : 65001

Date: 2017-05-05 15:28:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for safequestion
-- ----------------------------
DROP TABLE IF EXISTS `safequestion`;
CREATE TABLE `safequestion` (
  `questionid` int(10) NOT NULL AUTO_INCREMENT,
  `quesname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`questionid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of safequestion
-- ----------------------------
INSERT INTO `safequestion` VALUES ('1', '你的第一辆车是什么车？');
INSERT INTO `safequestion` VALUES ('2', '你读高中时住的是哪一条街');
INSERT INTO `safequestion` VALUES ('3', '你第一次坐飞机是飞往哪里？');
INSERT INTO `safequestion` VALUES ('4', '你第一个通关了的电子游戏叫什么名字？');
INSERT INTO `safequestion` VALUES ('5', '你的第二只宠物叫什么名字？');
INSERT INTO `safequestion` VALUES ('6', '你最喜欢的球队或者球员叫什么名字？');
