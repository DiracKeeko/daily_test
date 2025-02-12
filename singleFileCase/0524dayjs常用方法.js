const dayjs = require("../common/lib/dayjs1.11.10.min.js");

const dateStr = "2022-08-18 12:00:00";

// ## 基本使用
const day01 = dayjs(dateStr).format("YYYY-MM-DD"); // 2022-08-18
const day02 = dayjs(dateStr).format("YYYY-MM-DD HH:mm:ss"); // 2022-08-18 12:00:00
// console.log("day01->", day01);
// console.log("day02->", day02);

// ## 带格式的解析
const day21 = dayjs(dateStr, "YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm:ss"); // 2022-08-18 12:00:00
const day22 = dayjs(dateStr, "YYYY-MM-DD").format("YYYY-MM-DD HH:mm:ss"); // 2022-08-18 12:00:00 
// ↑ 注意这里依然会解析 HH:mm:ss
// console.log({day21, day22});

// ## dayjs获取本日、本周、自然月、季度、半年、自然年的开始时间

const day03 = dayjs(dateStr).startOf("day").format("YYYY-MM-DD HH:mm:ss"); // 2022-08-18 00:00:00
const day04 = dayjs(dateStr).startOf("week").format("YYYY-MM-DD HH:mm:ss"); // 2022-08-14 00:00:00
const day05 = dayjs(dateStr).startOf("month").format("YYYY-MM-DD HH:mm:ss"); // 2022-08-01 00:00:00
const day06 = dayjs(dateStr).startOf("quarter").format("YYYY-MM-DD HH:mm:ss"); // 同dateStr 没有startOf("quarter")这个方法
const day07 = dayjs(dateStr).startOf("halfYear").format("YYYY-MM-DD HH:mm:ss"); // 同dateStr 没有startOf("halfYear")方法
const day08 = dayjs(dateStr).startOf("year").format("YYYY-MM-DD HH:mm:ss"); // 2022-01-01 00:00:00
// console.log({ day03, day04, day05, day06, day07, day08 });

// ## dayjs获取本日、本周、自然月、季度、半年、自然年的结束时间
const day09 = dayjs(dateStr).endOf("day").format("YYYY-MM-DD HH:mm:ss"); // 2022-08-18 23:59:59
const day10 = dayjs(dateStr).endOf("week").format("YYYY-MM-DD HH:mm:ss"); // 2022-08-20 23:59:59
const day11 = dayjs(dateStr).endOf("month").format("YYYY-MM-DD HH:mm:ss"); // 2022-08-31 23:59:59
const day12 = dayjs(dateStr).endOf("quarter").format("YYYY-MM-DD HH:mm:ss"); // 同dateStr 没有endOf("quarter")这个方法
const day13 = dayjs(dateStr).endOf("halfYear").format("YYYY-MM-DD HH:mm:ss"); // 同dateStr 没有endOf("halfYear")方法
const day14 = dayjs(dateStr).endOf("year").format("YYYY-MM-DD HH:mm:ss"); // 2022-12-31 23:59:59
// console.log({ day09, day10, day11, day12, day13, day14 });

// ## dayjs 日期的加减
const day31 = dayjs(dateStr).add(1, "day").format("YYYY-MM-DD HH:mm:ss"); // 2022-08-19 12:00:00
const day32 = dayjs(dateStr).add(2, "month").format("YYYY-MM-DD HH:mm:ss"); // 2022-10-18 12:00:00
const day33 = dayjs(dateStr).add(1, "quarter").format("YYYY-MM-DD HH:mm:ss"); // 同dateStr 没有add( ,"quarter")这个方法
const day34 = dayjs(dateStr).add(1, "year").format("YYYY-MM-DD HH:mm:ss"); // 2023-08-18 12:00:00
// console.log({ day31, day32, day33, day34 });

const day35 = dayjs(dateStr).subtract(1, "day").format("YYYY-MM-DD HH:mm:ss"); // 2022-08-17 12:00:00
const day36 = dayjs(dateStr).subtract(2, "month").format("YYYY-MM-DD HH:mm:ss"); // 2022-06-18 12:00:00
const day37 = dayjs(dateStr).subtract(1, "quarter").format("YYYY-MM-DD HH:mm:ss"); // 同dateStr 没有subtract( ,"quarter")这个方法
const day38 = dayjs(dateStr).subtract(1, "year").format("YYYY-MM-DD HH:mm:ss"); // 2021-08-18 12:00:00
// console.log({ day35, day36, day37, day38 });

// ## dayjs 日期差值的计算 diffDay
const diff01 = dayjs().diff(dayjs(dateStr), "day"); // 从今天到dateStr的天数
const diff02 = dayjs().diff(dayjs(dateStr), "week"); // 从今天到dateStr的周数
const diff03 = dayjs().diff(dayjs(dateStr), "year"); // 从今天到dateStr的年数

const endStr = "2022-09-11";
const diff04 = dayjs(endStr).diff(dayjs(dateStr), "day"); // 23
const diff05 = dayjs(endStr).diff(dayjs(dateStr), "week"); // 3
const diff06 = dayjs(endStr).diff(dayjs(dateStr), "year"); // 0
console.log({ diff01, diff02, diff03, diff04, diff05, diff06 });
// 注意：dayjs的diff会向下取整，因此在判定过期时间上一定要小心。 
// 详细0503diffDay.html


