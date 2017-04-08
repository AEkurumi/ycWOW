CREATE TABLE `safe_question` (
  `questionid` int(10) NOT NULL AUTO_INCREMENT,
  `quesname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`questionid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `wow_user` (
  `uid` int(10) NOT NULL AUTO_INCREMENT,
  `uidnum` varchar(18) COLLATE utf8_unicode_ci NOT NULL,
  `uname` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `uemail` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `upwd` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `questionid` int(10) NOT NULL,
  `uans` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `isadmin` tinyint(4) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

alter table wow_user add foreign key(questionid) references safe_question(questionid);