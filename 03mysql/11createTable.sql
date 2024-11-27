CREATE DATABASE daily_test;

use daily_test;

CREATE TABLE `user_info_d` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '(本系统内的)用户id',
  `unique_id` CHAR(8) NOT NULL COMMENT '(本企业内的)用户唯一标识',
  `name` VARCHAR(16) COMMENT '通知创建人name',
  `age` INT COMMENT '通知创建人id',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB COMMENT = '用户信息表';

-- 建表: 一个主键 + 一个联合索引
CREATE TABLE `user_collection` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '收藏id',
  `user_id` INT NOT NULL COMMENT '收藏者id',
  `type` VARCHAR(64) NOT NULL COMMENT '收藏产品类型',
  `product_id` VARCHAR(64) NOT NULL COMMENT '当前收藏产品对应的产品id',
  `title` VARCHAR(128) COMMENT '收藏标题',
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_user_type_product` (`user_id`, `type`, `product_id`)
) ENGINE = InnoDB COMMENT = '用户收藏信息表';