-- 先执行 11createTable.sql

INSERT INTO `user_info_d` (`id`, `unique_id`, `name`, `age`) VALUES
(1, '001', 'Alice', 25),
(2, '002', 'Bob', 30);

INSERT INTO `user_info_d` (`unique_id`, `name`, `age`) VALUES
('003', 'Charlie', 28),
('004', 'David', 35),
('005', 'Eva', 22);

-- 再插入一条id为3的数据，就会报错了
INSERT INTO `user_info_d` (`id`, `unique_id`, `name`, `age`) VALUES
(3, '001', 'Alice', 25);
