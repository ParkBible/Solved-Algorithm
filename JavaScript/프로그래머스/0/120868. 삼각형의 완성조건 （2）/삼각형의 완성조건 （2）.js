function solution(sides) {
    let cnt = 0;
    
    // a < b
    let a = 0;
    let b = 0;    
    
    if (sides[0] < sides[1]) {
        a = sides[0];
        b = sides[1];
    } else {
        a = sides[1];
        b = sides[0];
    }
    
    // a + b < c, b < a + c
    for (i = b - a + 1; i < a + b; i++) {
        cnt++;
    }
    
    return cnt;
}