-- 通过 as 给查询结果中新增一列固定值

-- select 
--   i.user_id user_id,
--   2 as `type`, -- 此处的 2 在查询结果中呈现数字类型 int
--   i.post_id product_id,
--   c.title title,
--   i.create_time create_time
-- from community_user_collect i
-- left join community_post c
-- on i.post_id = c.id
-- limit 100

select 
  i.user_id user_id,
  '2' as `type`, -- 此处的 '2' 在查询结果中呈现字符串类型 varchar
  i.post_id product_id,
  c.title title,
  i.create_time create_time
from community_user_collect i
left join community_post c
on i.post_id = c.id
limit 100