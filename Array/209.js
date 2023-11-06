// 获取最短之和等于目标值的个数
function calcFunc(nums, target) {
    let n = nums.length;
    if (n === 0) return 0;

    let result = nums.length + 1;
    let start = 0;
    let end = 0;
    let sum = 0;

    while (end < n) {
        sum += nums[end];

        while (sum >= target) {
            sum -= nums[start];
            result = Math.min(result, end - start + 1);
            start++;
        }

        end++;
    }

    return result > n ? 0 : result;
}


console.log(calcFunc());
