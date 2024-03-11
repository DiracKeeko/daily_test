ALTER TABLE system_notice
ADD COLUMN skin TINYINT(1) DEFAULT 1 COMMENT '皮肤类别: 0默认, 1喜庆, 2悲伤',
ADD COLUMN release_time DATETIME COMMENT '发布时间',
ADD COLUMN expire_time DATETIME COMMENT '过期时间';