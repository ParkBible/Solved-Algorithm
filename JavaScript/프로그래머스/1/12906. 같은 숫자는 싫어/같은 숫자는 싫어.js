function solution(arr)
{
    result = [];
    
    arr.forEach((el, idx) => {
        if (idx !== 0) {
            if (result[result.length - 1] === el) {
                result.pop();
            }
        }
        
        result.push(el);
    })
    
    return result;
}