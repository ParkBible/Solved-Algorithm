function solution(progresses, speeds) {
    const leftDays = [];
    const result = [];
    
    progresses.forEach((progress, index) => {
        const leftDay = Math.ceil((100 - progress) / speeds[index]);
        
        if (index === 0 || leftDay > leftDays[leftDays.length - 1]) {
            result.push(1);
            leftDays.push(leftDay);
        } else {
            result[result.length - 1]++;
        }
        
    });
    
    return result;
}