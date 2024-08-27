select 
  i.ID id
  i.InfoPublDate publishDate,
  i.InfoPublTime publishTime,
  i.SourceName source,
  i.Title title,
  c.Content Content
  JSON_ARRYAGG(tn.NewsTagName) as labelList
from ps_newsinfo i
left join ps_newscontent c
on c.RID = i.ID
left join ps_newstag t
on t.RID = i.ID
where
  i.NewsType = 1
  and i.InfoLevel in (2, 3, 4, 5)
  and t.TagTypeCode = 99
order by i.InfoPublDate desc, i.InfoPublTime desc
limit 30 offset 0;

-- interface 3
-- 入参样例
-- {
--   stockId: "301027",
--   page: 1,
--   limit: 5
-- }

select 
  i.ID id
  i.InfoPublDate publishDate,
  i.InfoPublTime publishTime,
  i.SourceName source,
  i.Title title,
  c.Content Content
from ps_newsinfo i
left join ps_newscontent c
on c.RID = i.ID
left join ps_newstag t
on t.RID = i.ID
left join secumain scm 
on t.DataCode = scm.InnerCode
where
  i.NewsType = 1
  and i.InfoLevel in (2, 3, 4, 5)
  and scm.SecuCode = 301027
order by i.InfoPublDate desc, i.InfoPublTime desc
limit 5 offset 0;

先分析一下我的这段sql，我后面有需求，等我提问
-- 从secumain表中查询出stockInnerId ，再将stockInnerId 作为t.DataCode 查询结果