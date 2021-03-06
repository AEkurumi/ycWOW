
SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for career
-- ----------------------------
DROP TABLE IF EXISTS `career`;
CREATE TABLE `career` (
  `cid` int(10) NOT NULL AUTO_INCREMENT,
  `cname` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `cfeatures` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `cintro` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `cpic` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of career
-- ----------------------------
INSERT INTO `career` VALUES ('1', '战士', '坦克，输出伤害', '只要战火还在燃烧，各个种族的英雄就不会停止对战斗技巧的追求。战士将力量、领导才能和对武器盔甲的了解结合在一起，在光荣的战斗中一展身手。', '/pic/1492752809944_zhanshi.jpg');
INSERT INTO `career` VALUES ('2', '猎人', '伤害输出', '自远古以来，荒野的召唤就会让一些冒险者离开舒适的家，到无情的原始世界冒险。那些坚持下来的人就成为了猎人。他们对自然环境无比熟悉，可以像幽灵一样隐藏在树木之中，在敌人的必经之路上布下陷阱。', '/pic/1492752976254_lieren.jpg');
INSERT INTO `career` VALUES ('3', '牧师', '治疗，伤害输出', '牧师致力于升华他们的精神，通过造福大众来表达他们坚定不移的信念。 在过去的千百年中，每当大地遭受战火、盟友需要他们支援的时候，他们都会抛开舒适的生活，离开与世隔绝的神殿。\r\n', '/pic/1492753015216_mushi.jpg');
INSERT INTO `career` VALUES ('4', '萨满祭司', '治疗，伤害输出', '萨满祭司是灵魂的指引者，他们侍奉的不是神灵，而是每一种元素。作为大地、火焰、流水与空气之间的调解者，萨满祭司会召唤图腾，指引元素援助他们的盟友，或是惩罚那些给他们带来威胁的人。', '/pic/1492753041800_smjs.jpg');
INSERT INTO `career` VALUES ('5', '术士', '伤害输出', '面对恶魔的力量时，大多数英雄只看到了死亡。但术士看到的却只有机遇。他们的目标是支配这样的力量，并且在黑暗魔法中找到了手段。这些贪婪的施法者召唤恶魔仆从与他们并肩作战。', '/pic/1492753074726_shushi.jpg');
INSERT INTO `career` VALUES ('6', '德鲁伊', '坦克，治疗，伤害输出', '德鲁伊能驾驭强大的自然力量来维护平衡、保护生命。经验丰富的德鲁伊可以向敌人倾泄自然的原始能量，从远处召唤星界的愤怒砸向他们，用强化过的藤蔓束缚他们，或是将他们困在不息的旋风之中。', '/pic/1492753101224_dly.jpg');
INSERT INTO `career` VALUES ('7', '圣骑士', '坦克，治疗，伤害输出', '圣骑士的天职：匡扶弱小，伸张正义，消灭来自世界最黑暗角落的邪恶力量。这些神圣的战士们身着板甲，以对抗最强大的敌人。圣光的祝福让他们能够治愈伤口，在某些情况下，甚至可以使死者复生。', '/pic/1492753135619_sqs.jpg');
INSERT INTO `career` VALUES ('8', '潜行者', '伤害输出', '潜行者的信条就是契约，而荣誉则可以用金钱来交易。这些雇佣兵们不会被良知束缚，习惯依赖于残忍而高效的战术。', '/pic/1492753164594_qxz.jpg');
INSERT INTO `career` VALUES ('9', '死亡骑士', '坦克，近战伤害输出', '当巫妖王失去对死亡骑士的控制之时，昔日的拥护者们为在他控制下曾遭受的恐怖强压展开复仇。赢得复仇之战以后，死亡骑士们发现自己既没有目标也无家可归。 他们陆续进入了生者的世界，去寻找新的目标。', '/pic/1492753198403_swqs.jpg');
INSERT INTO `career` VALUES ('10', '法师', '伤害输出', '只有最敏锐、聪慧、严于律己的学生才能够走上法师之路。法师所能够掌握的奥术魔法太过强大而危险，只有最专注的研习者才能够窥见其中的奥秘。', '/pic/1492753226583_fashi.jpg');
INSERT INTO `career` VALUES ('11', '武僧', '坦克，治疗，伤害输出', '几个世纪以前，当熊猫人还臣服于魔古族统治的时候，是武僧们为潘达利亚黯淡的未来带来了些许希望。由于被当时的统治者们剥夺了使用武器的权利，熊猫人们专注于练习运用真气进行徒手战斗。', '/pic/1492753257013_wuseng.jpg');
INSERT INTO `career` VALUES ('12', '恶魔猎手', '坦克，近战伤害输出', '作为伊利丹·怒风的追随者，恶魔猎手继承了他黑暗的遗产。无论是敌人还是盟友都对他们的力量心怀畏惧。伊利达雷自愿接受了邪能和混乱魔法，正是这样的能量长期威胁着艾泽拉斯，但他们相信这是抗击燃烧军团所必需的。', '/pic/1492753286037_emls.jpg');
