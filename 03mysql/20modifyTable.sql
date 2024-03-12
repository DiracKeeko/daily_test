ALTER TABLE system_notice
ADD COLUMN skin TINYINT(1) DEFAULT 1 COMMENT '皮肤类别: 0默认, 1喜庆, 2悲伤',
ADD COLUMN publish_time DATETIME COMMENT '发布时间',


ALTER TABLE system_notice MODIFY COLUMN notice_type TINYINT(1) DEFAULT 1 NOT NULL COMMENT '通知类型: 1纯文本, 2纯图片';
-- 上下两行等价
ALTER TABLE system_notice CHANGE COLUMN notice_type notice_type TINYINT(1) DEFAULT 1 NOT NULL COMMENT '通知类型: 1纯文本, 2纯图片';


-- 在sql的change语句中，表名不需要加引号，即使是'state'也不需要加引号
ALTER TABLE system_notice CHANGE COLUMN state state TINYINT(1) DEFAULT 0 NOT NULL COMMENT '状态 0:未发布, 1:已发布, 2:已下线, 3:已删除';


-- 修改表的字段 
MODIFY COLUMN update_time DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间';
