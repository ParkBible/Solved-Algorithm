function solution(array, commands) {
    const results = [];
    
    for (command of commands) {
        const [i, j, k] = command;
        results.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);        
    }
    
    return results;
}