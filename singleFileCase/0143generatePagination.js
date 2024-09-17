/* 
  生成分页器数据
  给定当前页、总页数和可视页码数量，生成相应的分页数组。
*/

function generatePagination(currentPage, totalPages, visiblePages) {
  let start = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  let end = Math.min(totalPages, start + visiblePages - 1);
  
  if (end - start + 1 < visiblePages) {
    start = Math.max(1, end - visiblePages + 1);
  }
  
  return Array.from({ length: end - start + 1 }, (v, i) => start + i);
}

console.log("(5, 10, 5) ->", generatePagination(5, 10, 5)); //  (5, 10, 5) -> [3, 4, 5, 6, 7]
console.log("(8, 10, 5) ->", generatePagination(8, 10, 5)); //  (8, 10, 5) -> [ 6, 7, 8, 9, 10 ]
console.log("(9, 10, 5) ->", generatePagination(9, 10, 5)); //  (8, 10, 5) -> [ 6, 7, 8, 9, 10 ]

