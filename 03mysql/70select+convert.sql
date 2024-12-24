
-- mysql中的类型转换 #显式转换 #隐式转换

-- 在 MySQL 中，INT 类型的数据插入到 VARCHAR 类型的字段通常是可以成功的
-- 因为 MySQL 会隐式地将 INT 转换为字符串形式存储在 VARCHAR 字段中。
-- anyway 推荐将类型转换的部分显式写明

-- 下面是 60insert+select v1 
insert into user_collection (user_id, `type`, product_id, title, create_time)
select 
  i.user_id user_id,
  '2' as `type`,
  i.post_id product_id,
  c.title title,
  i.create_time create_time
from community_user_collect i
left join community_post c
on i.post_id = c.id
limit 100

-- 若 user_collection.product_id是一个 varchar类型, 而查询语句中，查询出来的 i.post_id 是一个int类型
-- 这种情况下由于 MySQL的隐式类型转换，插入语句会执行成功

-- 推荐将类型转换显式表达
-- 显式表达 v1 convert
insert into user_collection (user_id, `type`, product_id, title, create_time)
select 
  i.user_id user_id,
  '2' as `type`,
  convert(i.post_id, char) as product_id, -- 将 post_id 显式转换为字符串
  c.title title,
  i.create_time create_time
from community_user_collect i
left join community_post c
on i.post_id = c.id
limit 1


-- 显式表达 v2 convert
insert into user_collection (user_id, `type`, product_id, title, create_time)
select 
  i.user_id user_id,
  '2' as `type`,
  cast(i.post_id as char) as product_id, -- 将 post_id 显式转换为字符串
  c.title title,
  i.create_time create_time
from community_user_collect i
left join community_post c
on i.post_id = c.id
limit 1
