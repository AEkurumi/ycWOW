/*
Navicat MySQL Data Transfer

Source Server         : bbb
Source Server Version : 50513
Source Host           : 127.0.0.1:3306
Source Database       : wow

Target Server Type    : MYSQL
Target Server Version : 50513
File Encoding         : 65001

Date: 2017-05-05 15:28:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for content
-- ----------------------------
DROP TABLE IF EXISTS `content`;
CREATE TABLE `content` (
  `conid` int(10) NOT NULL AUTO_INCREMENT,
  `uid` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `fid` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ftwoid` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `contit` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `content` varchar(2550) COLLATE utf8_unicode_ci NOT NULL,
  `contime` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `isadmin` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `conurl` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ans` varchar(2000) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`conid`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of content
-- ----------------------------
INSERT INTO `content` VALUES ('24', '40', '1', '1', 'qqqq', 'qaaaa', '2017.4.24 ', '0', '1222222222', '');
INSERT INTO `content` VALUES ('25', '41', '1', '1', '1231231', '2123123123', '2017,4,27 20:43:22:861', '0', '1493297002861', '');
INSERT INTO `content` VALUES ('27', '42', '1', '1', '124我打算多', 'asdasdas', '2017,4,27 20:43:35:114', '0', '1493297015114', '');
INSERT INTO `content` VALUES ('28', '41', '1', '2', 'wedas', 'asdfasd', '2017,4,27 20:43:40:26', '0', '1493297020026', '');
INSERT INTO `content` VALUES ('29', '40', '1', '2', 'asdfasdac', 'asdasdfdc', '2017,4,27 20:43:44:735', '0', '1493297024735', '');
INSERT INTO `content` VALUES ('30', '41', '1', '2', 'asdcsax', 'asdfsafvdsacd', '2017,4,27 20:43:50:383', '0', '1493297030383', '');
INSERT INTO `content` VALUES ('31', '41', '1', '3', 'dasdcsxxasd', 'casdcadscs', '2017,4,27 20:43:56:891', '0', '1493297036891', '');
INSERT INTO `content` VALUES ('32', '39', '1', '3', 'ascdsacsx', 'asdcsdadcdas', '2017,4,27 20:44:2:62', '1', '1493297042062', '');
INSERT INTO `content` VALUES ('33', '39', '1', '3', '1111111111111111', '11111111111111111', '2017,4,27 20:44:6:546', '1', '1493297046546', '');
INSERT INTO `content` VALUES ('34', '39', '客户服务', '客服专区', '打算', '的asas阿达是大事发生', '2017,5,5 13:50:8:698', '1', '1493963408698', '');
INSERT INTO `content` VALUES ('35', '39', '客户服务', '客服专区', '大萨达是打算的 ', ' 大萨达阿萨德阿萨德阿萨德as', '2017,5,5 13:50:52:463', '1', '1493963452463', '');
INSERT INTO `content` VALUES ('36', '39', '1', '1', '阿斯顿发阿萨德', '的阿斯顿发阿斯顿发阿萨德发的', '2017,5,5 13:52:51:525', '1', '1493963571525', 'aaa,Fri May 05 2017 15:07:21 GMT+0800 (中国标准时间),打算阿萨德发财树;aaa,Fri May 05 2017 15:07:49 GMT+0800 (中国标准时间),阿萨德发斯蒂芬阿萨德翡翠城传输到;aaa,Fri May 05 2017 15:16:35 GMT+0800 (中国标准时间),考虑到付款啦什么课了多次;');
