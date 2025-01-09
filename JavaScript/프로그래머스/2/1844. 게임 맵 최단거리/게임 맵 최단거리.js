function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const dist = Array.from(Array(n), () => new Array(m).fill(1));
    const queue = [[0, 0]];
    
    while (queue.length > 0) {
        const position = queue.shift();
        const now = {y: position[0], x: position[1]}
        
        if (now.y === n - 1 && now.x === m - 1) {
            return dist[now.y][now.x];
        }
        
        const nextPositions = [
            [now.y - 1, now.x], [now.y + 1, now.x], [now.y, now.x + 1], [now.y, now.x - 1]
        ];
        
        nextPositions.forEach(coord => {
            const next = {y: coord[0], x: coord[1]}
            
            if (next.y >= 0 && next.x >= 0 && next.y < n && next.x < m) {
                if (maps[next.y][next.x] === 1) {
                    queue.push([next.y, next.x]);
                    maps[next.y][next.x] = 0;
                    dist[next.y][next.x] = dist[now.y][now.x] + 1;
                }
            }
        });
    }
    
    return -1;
}