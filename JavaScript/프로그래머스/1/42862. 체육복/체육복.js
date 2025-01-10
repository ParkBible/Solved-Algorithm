function solution(n, lost, reserve) {
    const losts = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);;
    const reserves = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);;
    
    let res = n - losts.length;
            
    for (let l of losts) {
        for (let r in reserves) {
            if (reserves[r] === l - 1 || reserves[r] === l + 1) {
                res++;
                reserves.splice(r, 1);
                break;
            }
        }
        
        if (reserves.length === 0) {
            break;
        }
    }
    
    return res;
}