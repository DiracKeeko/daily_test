-- 将select选中的结果，作为一张表的初始值，用来初始化user_collection表
-- user_collection表的字段是 id, user_id, type, product_id, title, create_time ; 其中 id 是自增主键

-- v1 推荐这种写全字段的方式
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

-- v2 省略别名字段的写法
insert into user_collection (user_id, `type`, product_id, title, create_time)
select 
  i.user_id, -- 省略
  '2' as `type`,
  i.post_id, -- 省略
  c.title, -- 省略
  i.create_time -- 省略
from community_user_collect i
left join community_post c
on i.post_id = c.id
limit 100

