// 排序
function sortedSquares(nums) {
    const newNums = nums.map(item => Math.pow(item, 2)).sort((a, b) => a - b);
    return newNums;
}


console.log(sortedSquares([-4,-1,0,3,10]));
