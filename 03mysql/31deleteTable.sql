-- 删除数据库daily_test 中的user_info_d表中的全部数据，保留表。
DELETE FROM daily_test.user_info_d;

-- 这个操作对auto_increment字段的影响是什么?
-- 而对于使用 AUTO_INCREMENT 属性的字段，执行 DELETE 查询不会影响到自增计数器的值。自增计数器会继续递增，下一次插入行时，自增字段将使用下一个可用的值。
