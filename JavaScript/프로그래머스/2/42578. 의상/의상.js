function solution(clothes) {
    const classifiedClothes = {};
    let res = 1;
    
    for (let cloth of clothes) {
        if (!classifiedClothes[cloth[1]]) {
            classifiedClothes[cloth[1]] = [];
        }
        
        classifiedClothes[cloth[1]].push(cloth[0]);
    }
    
    const types = Object.keys(classifiedClothes);
    
    for (let type of types) {
        res *= classifiedClothes[type].length + 1;
    }
    
    return res - 1;
}