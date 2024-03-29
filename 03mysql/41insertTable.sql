

-- 接 40insertTable.sql

-- 在创建用户场景，如果连续的两条请求都是同一个用户发起，就有可能会出现连续的两条下面的语句，且都被执行成功。
INSERT INTO `user_info_d` (`unique_id`, `name`, `age`) VALUES ('001', 'Alice', 25);
INSERT INTO `user_info_d` (`unique_id`, `name`, `age`) VALUES ('001', 'Alice', 25);

-- 而primary key 又是自增的id, 所以不会报错。 这就会导致数据库中插入了两条同样的数据 unique_id相同，但是id不同
-- 改变sql语句

-- 形式1 有重复的unique_id 001 -> 插入失败，不报错，变更行数为0
INSERT INTO `user_info_d` (`unique_id`, `name`, `age`)
SELECT * FROM (
  SELECT '001', 'Alice', 25
) AS tmp
WHERE NOT EXISTS (
  SELECT 1 FROM `user_info_d` WHERE `unique_id` = '001'
) LIMIT 1;


-- 形式1 没有重复的unique_id 006 -> 插入成功，变更行数为1
INSERT INTO `user_info_d` (`unique_id`, `name`, `age`)
SELECT * FROM (
  SELECT '006', '006Test', 26
) AS tmp
WHERE NOT EXISTS (
  SELECT 1 FROM `user_info_d` WHERE `unique_id` = '006'
) LIMIT 1;

-- 上面这段SQL 也可以改为下面的形式 形式2 (更推荐 形式2)
INSERT INTO `user_info_d` (`unique_id`, `name`, `age`)
SELECT '007', '007Test', 27
FROM DUAL
WHERE NOT EXISTS (
  SELECT 1 FROM `user_info_d` WHERE `unique_id` = '007'
) LIMIT 1;

/* 
  在MySQL中，DUAL是一个虚拟的系统表，通常用于在没有实际表的情况下执行一些特定的操作，例如在INSERT INTO ... SELECT语句中使用DUAL来生成一行数据。

  DUAL表只有一列和一行，因此可以用来执行一些简单的计算或产生一些固定值。在实际使用中，它通常用于产生一个或多个虚拟行，或者执行一些不依赖于表的查询。

  在上面的查询中，FROM DUAL用于从DUAL表中选择一个虚拟行。因为DUAL表只有一行，所以这个查询实际上只是从DUAL表中选择了一个虚拟行，然后根据WHERE子句检查是否需要执行插入操作。
 */

-- 下面这段语句是错误的 (INSERT语句不支持WHERE子句)
/* 
INSERT INTO `user_info_d` (`unique_id`, `name`, `age`)
VALUES ('006', '006Test', 25)
WHERE NOT EXISTS (
  SELECT 1 FROM `user_info_d` WHERE `unique_id` = '006'
) LIMIT 1; 
*/






INSERT INTO user_info (yst_id, other_column1, other_column2, ...)
SELECT * FROM (SELECT your_value1, your_value2, your_value3, ...) AS tmp
WHERE NOT EXISTS (
    SELECT 1 FROM user_info WHERE yst_id = your_value1
) LIMIT 1;