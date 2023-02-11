SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
use test;
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL,
  `age` bigint NOT NULL,
  `mobile` bigint NOT NULL,
  `address` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL,
  `sex` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'tom', 20, 18012345678, '' ,'male');
INSERT INTO `user` VALUES (2, 'mary', 20, 18012345678, '东莞路111号', 'female');
INSERT INTO `user` VALUES (3, 'jack', 21, 18012345678, '东莞路111号', 'male');
INSERT INTO `user` VALUES (5, 'test', 20, 18012345678, '东莞路111号', 'other');
INSERT INTO `user` VALUES (8, 'tom', 20, 18012345678, '东莞路111号', 'male');
INSERT INTO `user` VALUES (9, 'add', 20, 18012345678, '东莞路111号', 'other');
INSERT INTO `user` VALUES (10, 'Sally', 11, 18012345678, '东莞路111号', 'female');

SET FOREIGN_KEY_CHECKS = 1;
