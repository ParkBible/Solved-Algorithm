function solution(nums) {
    const set = new Set(nums);
    const uniqueNums = Array.from(set);
    
    return uniqueNums.length > nums.length / 2 ? nums.length / 2 : uniqueNums.length
}