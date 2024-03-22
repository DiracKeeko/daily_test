CREATE TABLE `system_notice` (
    `id` INT NOT NULL AUTO_INCREMENT COMMENT '通知id',
    `notice_type` VARCHAR(32) NOT NULL COMMENT '通知类型',
    `title` VARCHAR(64) NOT NULL COMMENT '通知标题',
    `content` LONGTEXT DEFAULT NULL COMMENT '通知内容',
    `user_id` INT NOT NULL COMMENT '通知创建人id',
    `user_name` VARCHAR(32) NOT NULL COMMENT '通知创建人name',
    `state` TINYINT(1) NOT NULL DEFAULT 0 COMMENT '状态: 0未发布, 1已发布, 2已下线, 3已删除',
    `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `update_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB COMMENT='通知公告表';
