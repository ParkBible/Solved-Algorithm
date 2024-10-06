function solution(numbers, target) {
    nums = numbers;
    count = 0;
    
    dfs(target, 0, 0);
    return count;
}

const dfs = (target, lv, val) => {   
    if (lv === nums.length) {
        if (val === target) {
            count++;
        }
    } else {
        dfs(target, lv + 1, val + nums[lv]);
        dfs(target, lv + 1, val - nums[lv]);
    }
}