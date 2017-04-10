CREATE TABLE `safequestion` (
  `questionid` int(10) NOT NULL AUTO_INCREMENT,
  `quesname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`questionid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
  CONSTRAINT `wowuser_ibfk_2` FOREIGN KEY (`questionid`) REFERENCES `safequestion` (`questionid`),
  CONSTRAINT `wowuser_ibfk_1` FOREIGN KEY (`questionid`) REFERENCES `safequestion` (`questionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


alter table wowuser add foreign key(questionid) references safequestion(questionid);