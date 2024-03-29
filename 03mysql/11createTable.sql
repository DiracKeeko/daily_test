CREATE DATABASE daily_test;

use daily_test;
CREATE TABLE `user_info_d` (
    `id` INT NOT NULL AUTO_INCREMENT COMMENT '(本系统内的)用户id',
    `unique_id` CHAR(8) NOT NULL COMMENT '(本企业内的)用户唯一标识',
    `name` VARCHAR(16) COMMENT '通知创建人name',
    `age` INT COMMENT '通知创建人id',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB COMMENT='用户信息表';