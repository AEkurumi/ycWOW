/*
Navicat MySQL Data Transfer

Source Server         : bbb
Source Server Version : 50513
Source Host           : 127.0.0.1:3306
Source Database       : wow

Target Server Type    : MYSQL
Target Server Version : 50513
File Encoding         : 65001

Date: 2017-05-05 15:29:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for wowuser
-- ----------------------------
DROP TABLE IF EXISTS `wowuser`;
CREATE TABLE `wowuser` (
  `uid` int(10) NOT NULL AUTO_INCREMENT,
  `uidnum` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `uname` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `uemail` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `upwd` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `questionid` int(10) NOT NULL,
  `uans` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `isadmin` tinyint(4) NOT NULL,
  PRIMARY KEY (`uid`),
  KEY `questionid` (`questionid`),
  CONSTRAINT `wowuser_ibfk_1` FOREIGN KEY (`questionid`) REFERENCES `safequestion` (`questionid`),
  CONSTRAINT `wowuser_ibfk_2` FOREIGN KEY (`questionid`) REFERENCES `safequestion` (`questionid`),
  CONSTRAINT `wowuser_ibfk_3` FOREIGN KEY (`questionid`) REFERENCES `safequestion` (`questionid`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of wowuser
-- ----------------------------
INSERT INTO `wowuser` VALUES ('39', '2b97cb3305e4b85ba2ba904cecff5601', 'aaa', '991538766@qq.com', '276c2e00a31611d8f31c42c4227de2cf', '3', '5e543256c480ac577d30f76f9120eb74', '1');
INSERT INTO `wowuser` VALUES ('40', '2b97cb3305e4b85ba2ba904cecff5601', '凌荣海', '837233792@qq.com', '276c2e00a31611d8f31c42c4227de2cf', '3', '5e543256c480ac577d30f76f9120eb74', '0');
INSERT INTO `wowuser` VALUES ('41', '9efebb3d7d059bff092842bf31dd2816', '大咸鱼', '410054017@qq.com', '276c2e00a31611d8f31c42c4227de2cf', '1', '5e543256c480ac577d30f76f9120eb74', '0');
INSERT INTO `wowuser` VALUES ('42', '9efebb3d7d059bff092842bf31dd2816', '大咸鱼', '410054017@qq.com', '276c2e00a31611d8f31c42c4227de2cf', '1', '5e543256c480ac577d30f76f9120eb74', '0');
INSERT INTO `wowuser` VALUES ('43', '9efebb3d7d059bff092842bf31dd2816', 'ldp', '2015810983@qq.com', '276c2e00a31611d8f31c42c4227de2cf', '1', '5e543256c480ac577d30f76f9120eb74', '0');
INSERT INTO `wowuser` VALUES ('44', '9efebb3d7d059bff092842bf31dd2816', '刘德鹏', '895616372@qq.com', '276c2e00a31611d8f31c42c4227de2cf', '5', '5e543256c480ac577d30f76f9120eb74', '0');
