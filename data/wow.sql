
--二次建表
--用户表
CREATE TABLE `wowuser` (
  `uid` int(10) NOT NULL AUTO_INCREMENT,
  `uidnum` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `uname` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `uemail` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `upwd` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `questionid` int(10) NOT NULL,
  `uans` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `isadmin` tinyint(4) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


--职业表
CREATE TABLE `career` (
  `cid` int(10) NOT NULL AUTO_INCREMENT,
  `cname` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `cfeatures` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `cintro` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `cpic` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--发帖表
CREATE TABLE `content` (
  `conid` int(10) NOT NULL AUTO_INCREMENT,
  `uid` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `conforum` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `conforumname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `contit` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `content` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `contime` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`conid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--论坛版块表
CREATE TABLE `forum` (
  `fid` int(10) NOT NULL AUTO_INCREMENT,
  `fonename` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ftwoname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ftwointro` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `fpic` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`fid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


--种族表
CREATE TABLE `gameclass` (
  `gid` int(10) NOT NULL AUTO_INCREMENT,
  `gcamp` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `gclass` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `gintro` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gpic` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--安全提问表
CREATE TABLE `safequestion` (
  `questionid` int(10) NOT NULL AUTO_INCREMENT,
  `quesname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`questionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--

alter table wowuser add foreign key(questionid) references safequestion(questionid);

--不正确
alter table wowuser add foreign key(uid) references content(uid);


--数据

--safequestion数据
INSERT INTO `safequestion` VALUES (1, '你的第一辆车是什么车？');
INSERT INTO `safequestion` VALUES (2, '你读高中时住的是哪一条街');
INSERT INTO `safequestion` VALUES (3, '你第一次坐飞机是飞往哪里？');
INSERT INTO `safequestion` VALUES (4, '你第一个通关了的电子游戏叫什么名字？');
INSERT INTO `safequestion` VALUES (5, '你的第二只宠物叫什么名字？');
INSERT INTO `safequestion` VALUES (6, '你最喜欢的球队或者球员叫什么名字？');

--gameclasss数据
INSERT INTO `gameclass` VALUES (1, '联盟', '矮人', '大胆而勇敢的矮人族是一支古老的种族，它起源于早期世界的泰坦用具有活力的石头创造的土灵。', '/pic/1492749987159_airen.jpg');
INSERT INTO `gameclass` VALUES (2, '联盟', '侏儒', '聪明、生机勃勃并且阴晴不定的侏儒在艾泽拉斯文明的种族中代表了一个独特的矛盾体。', '/pic/1492750015316_zhuru.jpg');
INSERT INTO `gameclass` VALUES (3, '联盟', '人类', '虽然人类只是艾泽拉斯大陆上最年轻的种族之一，但他们的坚毅和决心已经帮助他们战胜了许多挑战。', '/pic/1492750051028_renlei.jpg');
INSERT INTO `gameclass` VALUES (4, '联盟', '暗夜精灵', '古老而与世隔绝的暗夜精灵在艾泽拉斯历史的形成中扮演着关键性的角色。', '/pic/1492750073474_anyejingling.jpg');
INSERT INTO `gameclass` VALUES (5, '联盟', '德莱尼', '德莱尼人以坚定不移的圣光信仰作为武器，他们逃离了战火纷飞的家园，成为了联盟的中坚成员，他们必将让这些古老的恶魔宿敌付出代价。', '/pic/1492750118832_delaini.jpg');
INSERT INTO `gameclass` VALUES (6, '联盟', '狼人', '在可怕的格雷迈恩之墙后面，有一个可怕的诅咒肆虐了吉尔尼斯这个与世隔绝的人类王国，许多健壮的居民被转化成可怕的野兽，他们被称为狼人。', '/pic/1492750153159_langren.jpg');
INSERT INTO `gameclass` VALUES (7, '联盟', '熊猫人', '睿智的熊猫人重视身心的和谐，并为潘达利亚大陆的富饶和完整不懈地斗争着。一部分熊猫人离开了家乡加入联盟，在此寻找真正的正义以及荣耀。', '/pic/1492750193358_xiongmaoren1.jpg');
INSERT INTO `gameclass` VALUES (9, '部落', '兽人', '和部落的其他种族不同的是，兽人不是艾泽拉斯原住民。起初，他们以萨满部族的身份居住在苍翠繁茂的德拉诺世界。', '/pic/1492750244077_shouren.jpg');
INSERT INTO `gameclass` VALUES (12, '部落', '亡灵', '第三次战争后，巫妖王对其庞大军队的控制开始减弱，一小支亡灵队伍挣脱了他们主人的意志。', '/pic/1492750324532_wangling.jpg');
INSERT INTO `gameclass` VALUES (13, '部落', '牛头人', '爱好和平的牛头人（在他们自己的语言中称为shu’halo）长期居住在卡利姆多，在他们的女神大地母亲的命令下，他们努力保护大自然的平衡。', '/pic/1492750655439_ntr.jpg');
INSERT INTO `gameclass` VALUES (14, '部落', '巨魔', '艾泽拉斯野蛮的巨魔因其残忍、邪恶的神秘主义以及对其他种族的强烈仇恨而臭名昭著。', '/pic/1492750680321_jumo.jpg');
INSERT INTO `gameclass` VALUES (16, '部落', '地精', '当锈水财阀的地精与其交往过的盟友重修旧好，他们受到了部落的热烈欢迎。', '/pic/1492750747041_dijing.jpg');
INSERT INTO `gameclass` VALUES (17, '部落', '熊猫人', '睿智的熊猫人重视身心的和谐，并为潘达利亚大陆的富饶和完整不懈地斗争着。一部分熊猫人离开了家乡加入部落，毅然承担起保卫家园和其他种族的重担。', '/pic/1492750769326_xiongmaoren2.jpg');
INSERT INTO `gameclass` VALUES (18, '部落', '血精灵', '在第三次战争期间，居住在奎尔萨拉斯的高等精灵几乎被屠杀殆尽。现在他们努力想要重现种族昔日的辉煌，并克服对奥术魔法的依赖。', '/pic/1492750858878_xuejingling.jpg');

--职业数据
INSERT INTO `career` VALUES (11, '战士', '坦克，输出伤害', '只要战火还在燃烧，各个种族的英雄就不会停止对战斗技巧的追求。战士将力量、领导才能和对武器盔甲的了解结合在一起，在光荣的战斗中一展身手。', '/pic/1492752809944_zhanshi.jpg');
INSERT INTO `career` VALUES (12, '猎人', '伤害输出', '自远古以来，荒野的召唤就会让一些冒险者离开舒适的家，到无情的原始世界冒险。那些坚持下来的人就成为了猎人。他们对自然环境无比熟悉，可以像幽灵一样隐藏在树木之中，在敌人的必经之路上布下陷阱。', '/pic/1492752976254_lieren.jpg');
INSERT INTO `career` VALUES (13, '牧师', '治疗，伤害输出', '牧师致力于升华他们的精神，通过造福大众来表达他们坚定不移的信念。 在过去的千百年中，每当大地遭受战火、盟友需要他们支援的时候，他们都会抛开舒适的生活，离开与世隔绝的神殿。\r\n', '/pic/1492753015216_mushi.jpg');
INSERT INTO `career` VALUES (14, '萨满祭司', '治疗，伤害输出', '萨满祭司是灵魂的指引者，他们侍奉的不是神灵，而是每一种元素。作为大地、火焰、流水与空气之间的调解者，萨满祭司会召唤图腾，指引元素援助他们的盟友，或是惩罚那些给他们带来威胁的人。', '/pic/1492753041800_smjs.jpg');
INSERT INTO `career` VALUES (15, '术士', '伤害输出', '面对恶魔的力量时，大多数英雄只看到了死亡。但术士看到的却只有机遇。他们的目标是支配这样的力量，并且在黑暗魔法中找到了手段。这些贪婪的施法者召唤恶魔仆从与他们并肩作战。', '/pic/1492753074726_shushi.jpg');
INSERT INTO `career` VALUES (16, '德鲁伊', '坦克，治疗，伤害输出', '德鲁伊能驾驭强大的自然力量来维护平衡、保护生命。经验丰富的德鲁伊可以向敌人倾泄自然的原始能量，从远处召唤星界的愤怒砸向他们，用强化过的藤蔓束缚他们，或是将他们困在不息的旋风之中。', '/pic/1492753101224_dly.jpg');
INSERT INTO `career` VALUES (17, '圣骑士', '坦克，治疗，伤害输出', '圣骑士的天职：匡扶弱小，伸张正义，消灭来自世界最黑暗角落的邪恶力量。这些神圣的战士们身着板甲，以对抗最强大的敌人。圣光的祝福让他们能够治愈伤口，在某些情况下，甚至可以使死者复生。', '/pic/1492753135619_sqs.jpg');
INSERT INTO `career` VALUES (18, '潜行者', '伤害输出', '潜行者的信条就是契约，而荣誉则可以用金钱来交易。这些雇佣兵们不会被良知束缚，习惯依赖于残忍而高效的战术。', '/pic/1492753164594_qxz.jpg');
INSERT INTO `career` VALUES (19, '死亡骑士', '坦克，近战伤害输出', '当巫妖王失去对死亡骑士的控制之时，昔日的拥护者们为在他控制下曾遭受的恐怖强压展开复仇。赢得复仇之战以后，死亡骑士们发现自己既没有目标也无家可归。 他们陆续进入了生者的世界，去寻找新的目标。', '/pic/1492753198403_swqs.jpg');
INSERT INTO `career` VALUES (20, '法师', '伤害输出', '只有最敏锐、聪慧、严于律己的学生才能够走上法师之路。法师所能够掌握的奥术魔法太过强大而危险，只有最专注的研习者才能够窥见其中的奥秘。', '/pic/1492753226583_fashi.jpg');
INSERT INTO `career` VALUES (21, '武僧', '坦克，治疗，伤害输出', '几个世纪以前，当熊猫人还臣服于魔古族统治的时候，是武僧们为潘达利亚黯淡的未来带来了些许希望。由于被当时的统治者们剥夺了使用武器的权利，熊猫人们专注于练习运用真气进行徒手战斗。', '/pic/1492753257013_wuseng.jpg');
INSERT INTO `career` VALUES (22, '恶魔猎手', '坦克，近战伤害输出', '作为伊利丹·怒风的追随者，恶魔猎手继承了他黑暗的遗产。无论是敌人还是盟友都对他们的力量心怀畏惧。伊利达雷自愿接受了邪能和混乱魔法，正是这样的能量长期威胁着艾泽拉斯，但他们相信这是抗击燃烧军团所必需的。', '/pic/1492753286037_emls.jpg');


--论坛版块数据
INSERT INTO `forum` VALUES (1, '客户服务', '客服专区', '客服人员在此解决您的账号和游戏的相关问题', '/pic/1492755531795_kf.gif');
INSERT INTO `forum` VALUES (2, '客户服务', '技术支持区', '提交您的下载、更新、安装、等技术问题', '/pic/1492755614165_user.gif');
INSERT INTO `forum` VALUES (3, '客户服务', 'bug汇报区', '提交你发现的游戏相关bug', '/pic/1492755652306_bug.gif');
INSERT INTO `forum` VALUES (4, '客户服务', '客服建议区', '提交您对客服工作的建议，以改善我们的服务质量', '/pic/1492755686562_activity.gif');
INSERT INTO `forum` VALUES (5, '客户服务', '处罚名单区', '公布因违规而受到处罚的账号名单', '/pic/1492755734377_gruel.gif');
INSERT INTO `forum` VALUES (6, '客户服务', '服务器状态区', '查看服务器状态和维护、运行状况', '/pic/1492755779139_sever.gif');
INSERT INTO `forum` VALUES (7, '综合讨论', '综合讨论区', '讨论魔兽世界的一切', '/pic/1492758407662_complex.gif');
INSERT INTO `forum` VALUES (8, '综合讨论', '新服和战友招募讨论区', '找朋友，找团队的专属贴区', '/pic/1492758458036_new.png');
INSERT INTO `forum` VALUES (9, '综合讨论', '宠物对战区', '讨论《魔兽世界》宠物对战', '/pic/1492758501781_pet.gif');
INSERT INTO `forum` VALUES (10, '综合讨论', '活动讨论区', '在此讨论所有暴风游戏的活动', '/pic/1492758531195_activity.gif');
INSERT INTO `forum` VALUES (11, '综合讨论', '世界尽头旅店', '拖一把椅子，点一杯麦酒，讨论艾泽拉斯世界的奇闻铁事，分享你的故事', '/pic/1492758590400_word.gif');
INSERT INTO `forum` VALUES (12, '综合讨论', '地下城与团队副本讨论区', '讨论地下城与团队副本', '/pic/1492758627343_copy.gif');
INSERT INTO `forum` VALUES (13, '综合讨论', '任务和成就讨论区', '讨论任务，成就的心得和攻略', '/pic/1492758672411_task.gif');
INSERT INTO `forum` VALUES (14, '综合讨论', 'PVP讨论区', '讨论战场，竞技场等PVP内容', '/pic/1492758714402_pvp.gif');
INSERT INTO `forum` VALUES (15, '综合讨论', '用户界面和宏制作交流区', '在这里和其他玩家一同创作与分享您的宏和界面', '/pic/1492758774514_user.gif');
INSERT INTO `forum` VALUES (16, '综合讨论', '公会招募区', '在这里为你的公会招募战友。', '/pic/1492758815515_guild.gif');
INSERT INTO `forum` VALUES (17, '综合讨论', '集合石/魔兽达人讨论区', '集合石插件，魔兽达人插件的使用问题和建议请至此讨论。', '/pic/1492758880010_word.gif');
INSERT INTO `forum` VALUES (18, '职业讨论', '恶魔猎手区', '他们的力量来自于恶魔，也必将“还”给恶魔。', '/pic/1492759104826_activity.gif');
INSERT INTO `forum` VALUES (19, '职业讨论', '武僧区', '驾驭内心的力量，运用\"真气\"的能量。', '/pic/1492759153390_activity.gif');
INSERT INTO `forum` VALUES (20, '职业讨论', '死亡骑士区', '霜冻锐化了攻击，鲜血增强了体魄，不死之身在战斗中迸发出邪恶的怒气。', '/pic/1492759233792_activity.gif');
INSERT INTO `forum` VALUES (21, '职业讨论', '德鲁伊区', '驾驭强大的自然力量来维护平衡并保护生命，艾泽拉斯大陆上最多才多艺的英雄。', '/pic/1492759307713_activity.gif');
INSERT INTO `forum` VALUES (22, '职业讨论', '猎人区', '野兽是你的朋友，野外是你的天堂', '/pic/1492759338443_activity.gif');
INSERT INTO `forum` VALUES (23, '职业讨论', '法师区', '只有最充满智慧并严于律己的学徒才能走上法师之路。', '/pic/1492759393090_activity.gif');
INSERT INTO `forum` VALUES (24, '职业讨论', '圣骑士区', '保护弱者，消灭不公平，带来正义，并消除来自世界最黑暗角落的邪恶势力。', '/pic/1492759464942_activity.gif');
INSERT INTO `forum` VALUES (25, '职业讨论', '牧师区', '光明与黑暗，信念与精神。', '/pic/1492759497499_activity.gif');
INSERT INTO `forum` VALUES (26, '职业讨论', '潜行者区', '“他们看不到你的出现，但一定能看到你的离开。”', '/pic/1492759541743_activity.gif');
INSERT INTO `forum` VALUES (27, '职业讨论', '萨满祭司区', '地，火，水，风，听我召唤。', '/pic/1492759587249_activity.gif');
INSERT INTO `forum` VALUES (28, '客户服务', '术士区', '与恶魔签订契约，从黑暗中汲取力量。', '/pic/1492759626917_activity.gif');
INSERT INTO `forum` VALUES (29, '职业讨论', '战士区', '用传奇般精准手法瞄准盔甲上最细小的裂缝，在刀光剑影中挑筋断骨。', '/pic/1492759713294_activity.gif');













