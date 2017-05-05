/*
Navicat MySQL Data Transfer

Source Server         : bbb
Source Server Version : 50513
Source Host           : 127.0.0.1:3306
Source Database       : wow

Target Server Type    : MYSQL
Target Server Version : 50513
File Encoding         : 65001

Date: 2017-05-05 15:28:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for gameclass
-- ----------------------------
DROP TABLE IF EXISTS `gameclass`;
CREATE TABLE `gameclass` (
  `gid` int(10) NOT NULL AUTO_INCREMENT,
  `gcamp` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `gclass` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `gintro` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gpic` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of gameclass
-- ----------------------------
INSERT INTO `gameclass` VALUES ('1', '联盟', '矮人', '大胆而勇敢的矮人族是一支古老的种族，它起源于早期世界的泰坦用具有活力的石头创造的土灵。', '/pic/1492749987159_airen.jpg');
INSERT INTO `gameclass` VALUES ('2', '联盟', '侏儒', '聪明、生机勃勃并且阴晴不定的侏儒在艾泽拉斯文明的种族中代表了一个独特的矛盾体。', '/pic/1492750015316_zhuru.jpg');
INSERT INTO `gameclass` VALUES ('3', '联盟', '人类', '虽然人类只是艾泽拉斯大陆上最年轻的种族之一，但他们的坚毅和决心已经帮助他们战胜了许多挑战。', '/pic/1492750051028_renlei.jpg');
INSERT INTO `gameclass` VALUES ('4', '联盟', '暗夜精灵', '古老而与世隔绝的暗夜精灵在艾泽拉斯历史的形成中扮演着关键性的角色。', '/pic/1492750073474_anyejingling.jpg');
INSERT INTO `gameclass` VALUES ('5', '联盟', '德莱尼', '德莱尼人以坚定不移的圣光信仰作为武器，他们逃离了战火纷飞的家园，成为了联盟的中坚成员，他们必将让这些古老的恶魔宿敌付出代价。', '/pic/1492750118832_delaini.jpg');
INSERT INTO `gameclass` VALUES ('6', '联盟', '狼人', '在可怕的格雷迈恩之墙后面，有一个可怕的诅咒肆虐了吉尔尼斯这个与世隔绝的人类王国，许多健壮的居民被转化成可怕的野兽，他们被称为狼人。', '/pic/1492750153159_langren.jpg');
INSERT INTO `gameclass` VALUES ('7', '联盟', '熊猫人', '睿智的熊猫人重视身心的和谐，并为潘达利亚大陆的富饶和完整不懈地斗争着。一部分熊猫人离开了家乡加入联盟，在此寻找真正的正义以及荣耀。', '/pic/1492750193358_xiongmaoren1.jpg');
INSERT INTO `gameclass` VALUES ('8', '部落', '兽人', '和部落的其他种族不同的是，兽人不是艾泽拉斯原住民。起初，他们以萨满部族的身份居住在苍翠繁茂的德拉诺世界。', '/pic/1492750244077_shouren.jpg');
INSERT INTO `gameclass` VALUES ('9', '部落', '亡灵', '第三次战争后，巫妖王对其庞大军队的控制开始减弱，一小支亡灵队伍挣脱了他们主人的意志。', '/pic/1492750324532_wangling.jpg');
INSERT INTO `gameclass` VALUES ('10', '部落', '牛头人', '爱好和平的牛头人（在他们自己的语言中称为shu’halo）长期居住在卡利姆多，在他们的女神大地母亲的命令下，他们努力保护大自然的平衡。', '/pic/1492750655439_ntr.jpg');
INSERT INTO `gameclass` VALUES ('11', '部落', '巨魔', '艾泽拉斯野蛮的巨魔因其残忍、邪恶的神秘主义以及对其他种族的强烈仇恨而臭名昭著。', '/pic/1492750680321_jumo.jpg');
INSERT INTO `gameclass` VALUES ('12', '部落', '地精', '当锈水财阀的地精与其交往过的盟友重修旧好，他们受到了部落的热烈欢迎。', '/pic/1492750747041_dijing.jpg');
INSERT INTO `gameclass` VALUES ('13', '部落', '熊猫人', '睿智的熊猫人重视身心的和谐，并为潘达利亚大陆的富饶和完整不懈地斗争着。一部分熊猫人离开了家乡加入部落，毅然承担起保卫家园和其他种族的重担。', '/pic/1492750769326_xiongmaoren2.jpg');
INSERT INTO `gameclass` VALUES ('14', '部落', '血精灵', '在第三次战争期间，居住在奎尔萨拉斯的高等精灵几乎被屠杀殆尽。现在他们努力想要重现种族昔日的辉煌，并克服对奥术魔法的依赖。', '/pic/1492750858878_xuejingling.jpg');
