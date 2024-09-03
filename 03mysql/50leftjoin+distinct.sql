-- 通过distinct 给查询结果去重
select distinct
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
where
  i.NewsType = 1
  and i.MediaCode in (500000500, 501000500)
  and i.InfoLevel in (2, 3, 4, 5)
  and t.TagCodeOne = 99
order by i.InfoPublDate desc, i.InfoPublTime desc
limit 30 offset 0;

