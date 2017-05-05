/*
Navicat MySQL Data Transfer

Source Server         : bbb
Source Server Version : 50513
Source Host           : 127.0.0.1:3306
Source Database       : wow

Target Server Type    : MYSQL
Target Server Version : 50513
File Encoding         : 65001

Date: 2017-05-05 15:28:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for forum
-- ----------------------------
DROP TABLE IF EXISTS `forum`;
CREATE TABLE `forum` (
  `ftwoid` int(10) NOT NULL AUTO_INCREMENT,
  `fid` int(50) NOT NULL,
  `ftwoname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ftwointro` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `fpic` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `furl` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ftwoid`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of forum
-- ----------------------------
INSERT INTO `forum` VALUES ('1', '1', '客服专区', '客服人员在此解决您的账号和游戏的相关问题', '/pic/1492755531795_kf.gif', '/forum/kefu');
INSERT INTO `forum` VALUES ('2', '1', '技术支持区', '提交您的下载、更新、安装、等技术问题', '/pic/1492755614165_user.gif', '/forum/jishu');
INSERT INTO `forum` VALUES ('3', '1', 'bug汇报区', '提交你发现的游戏相关bug', '/pic/1492755652306_bug.gif', '/forum/bug');
INSERT INTO `forum` VALUES ('4', '1', '客服建议区', '提交您对客服工作的建议，以改善我们的服务质量', '/pic/1492755686562_activity.gif', '/forum/kfjianyi');
INSERT INTO `forum` VALUES ('5', '1', '处罚名单区', '公布因违规而受到处罚的账号名单', '/pic/1492755734377_gruel.gif', '/forum/chufa');
INSERT INTO `forum` VALUES ('6', '1', '服务器状态区', '查看服务器状态和维护、运行状况', '/pic/1492755779139_sever.gif', '/forum/fuwuqi');
INSERT INTO `forum` VALUES ('7', '2', '综合讨论区', '讨论魔兽世界的一切', '/pic/1492758407662_complex.gif', '/forum/zonghe');
INSERT INTO `forum` VALUES ('8', '2', '新服和战友招募讨论区', '找朋友，找团队的专属贴区', '/pic/1492758458036_new.png', '/forum/xinfu');
INSERT INTO `forum` VALUES ('9', '2', '宠物对战区', '讨论《魔兽世界》宠物对战', '/pic/1492758501781_pet.gif', '/forum/chongwu');
INSERT INTO `forum` VALUES ('10', '2', '活动讨论区', '在此讨论所有暴风游戏的活动', '/pic/1492758531195_activity.gif', '/forum/huodong');
INSERT INTO `forum` VALUES ('11', '2', '世界尽头旅店', '拖一把椅子，点一杯麦酒，讨论艾泽拉斯世界的奇闻铁事，分享你的故事', '/pic/1492758590400_word.gif', '/forum/shijie');
INSERT INTO `forum` VALUES ('12', '2', '地下城与团队副本讨论区', '讨论地下城与团队副本', '/pic/1492758627343_copy.gif', '/forum/dixiacheng');
INSERT INTO `forum` VALUES ('13', '2', '任务和成就讨论区', '讨论任务，成就的心得和攻略', '/pic/1492758672411_task.gif', '/forum/renwu');
INSERT INTO `forum` VALUES ('14', '2', 'PVP讨论区', '讨论战场，竞技场等PVP内容', '/pic/1492758714402_pvp.gif', '/forum/pvp');
INSERT INTO `forum` VALUES ('15', '2', '用户界面和宏制作交流区', '在这里和其他玩家一同创作与分享您的宏和界面', '/pic/1492758774514_user.gif', '/forum/user');
INSERT INTO `forum` VALUES ('16', '2', '公会招募区', '在这里为你的公会招募战友。', '/pic/1492758815515_guild.gif', '/forum/gonghui');
INSERT INTO `forum` VALUES ('17', '2', '集合石/魔兽达人讨论区', '集合石插件，魔兽达人插件的使用问题和建议请至此讨论。', '/pic/1492758880010_word.gif', '/forum/jijieshi');
INSERT INTO `forum` VALUES ('18', '3', '恶魔猎手区', '他们的力量来自于恶魔，也必将“还”给恶魔。', '/pic/1492759104826_activity.gif', '/forum/enmo');
INSERT INTO `forum` VALUES ('19', '3', '武僧区', '驾驭内心的力量，运用\"真气\"的能量。', '/pic/1492759153390_activity.gif', '/forum/wuseng');
INSERT INTO `forum` VALUES ('20', '3', '死亡骑士区', '霜冻锐化了攻击，鲜血增强了体魄，不死之身在战斗中迸发出邪恶的怒气。', '/pic/1492759233792_activity.gif', '/forum/swqs');
INSERT INTO `forum` VALUES ('21', '3', '德鲁伊区', '驾驭强大的自然力量来维护平衡并保护生命，艾泽拉斯大陆上最多才多艺的英雄。', '/pic/1492759307713_activity.gif', '/forum/dly');
INSERT INTO `forum` VALUES ('22', '3', '猎人区', '野兽是你的朋友，野外是你的天堂', '/pic/1492759338443_activity.gif', '/forum/lieren');
INSERT INTO `forum` VALUES ('23', '3', '法师区', '只有最充满智慧并严于律己的学徒才能走上法师之路。', '/pic/1492759393090_activity.gif', '/forum/fashi');
INSERT INTO `forum` VALUES ('24', '3', '圣骑士区', '保护弱者，消灭不公平，带来正义，并消除来自世界最黑暗角落的邪恶势力。', '/pic/1492759464942_activity.gif', '/forum/sqs');
INSERT INTO `forum` VALUES ('25', '3', '牧师区', '光明与黑暗，信念与精神。', '/pic/1492759497499_activity.gif', '/forum/mushi');
INSERT INTO `forum` VALUES ('26', '3', '潜行者区', '“他们看不到你的出现，但一定能看到你的离开。”', '/pic/1492759541743_activity.gif', '/forum/qxz');
INSERT INTO `forum` VALUES ('27', '3', '萨满祭司区', '地，火，水，风，听我召唤。', '/pic/1492759587249_activity.gif', '/forum/smjs');
INSERT INTO `forum` VALUES ('28', '3', '术士区', '与恶魔签订契约，从黑暗中汲取力量。', '/pic/1492759626917_activity.gif', '/forum/shushi');
INSERT INTO `forum` VALUES ('29', '3', '战士区', '用传奇般精准手法瞄准盔甲上最细小的裂缝，在刀光剑影中挑筋断骨。', '/pic/1492759713294_activity.gif', '/forum/zhanshi');
