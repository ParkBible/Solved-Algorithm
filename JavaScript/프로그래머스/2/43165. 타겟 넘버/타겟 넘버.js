function solution(numbers, target) {
    count = 0;
    
    const dfs = (lv, val) => {
        if (lv === numbers.length) {
            if (val === target) {
                count++;
            }
        } else {
            dfs(lv + 1, val + numbers[lv]);
            dfs(lv + 1, val - numbers[lv]);
        }
    }
    
    dfs(0, 0);
    
    return count;
}