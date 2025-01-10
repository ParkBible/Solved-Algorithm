function solution(n) {
    let cnt = 0;
        
    for (let i = 1; i < n + 1; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                cnt++;
                break;
            }
        }
    }
    
    return cnt;
}