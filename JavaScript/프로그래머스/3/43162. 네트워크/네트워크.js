function solution(n, computers) {
    const ch = Array.from({length: n}, () => 0)
    let count = 0;
    
    const bfs = (start) => {
        const queue = [start];
        ch[start] = 1;
        
        while (queue.length > 0) {
            const now = queue.shift();
            
            computers[now].forEach((isConnection, idx) => {
                if (now !== idx && isConnection === 1 && ch[idx] === 0) {
                    ch[idx] = 1;
                    queue.push(idx);
                }
            });
        }
    }
    
    for (let i = 0; i < ch.length; i++) {
        if (ch[i] === 0) {
            bfs(i);
            count++;
        }
    }
            
    return count;
}