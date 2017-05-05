/*
Navicat MySQL Data Transfer

Source Server         : bbb
Source Server Version : 50513
Source Host           : 127.0.0.1:3306
Source Database       : wow

Target Server Type    : MYSQL
Target Server Version : 50513
File Encoding         : 65001

Date: 2017-05-05 15:28:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for forumfirst
-- ----------------------------
DROP TABLE IF EXISTS `forumfirst`;
CREATE TABLE `forumfirst` (
  `fid` int(10) NOT NULL AUTO_INCREMENT,
  `fname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`fid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of forumfirst
-- ----------------------------
INSERT INTO `forumfirst` VALUES ('1', '客户服务');
INSERT INTO `forumfirst` VALUES ('2', '综合讨论');
INSERT INTO `forumfirst` VALUES ('3', '职业讨论');
