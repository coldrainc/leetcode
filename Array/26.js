// 移除目标元素
function removElement(nums, target) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (target !== nums[i]) {
            nums[k++] = nums[i];
        }
    }

    return k;
}
