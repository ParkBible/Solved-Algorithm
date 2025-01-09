function solution(wallpaper) {
    let start = {x: Infinity, y: null};
    let end = {x: 0, y: 0};
    
    for (let i = 0; i < wallpaper.length; i++) {
        if (start.y === null && wallpaper[i].includes("#")) {
            start.y = i;
        }
        
        if (wallpaper[i].indexOf("#") >= 0 && wallpaper[i].indexOf("#") < start.x) {
            start.x = wallpaper[i].indexOf("#");
        }
        
        if (wallpaper[i].lastIndexOf("#") >= 0 && wallpaper[i].lastIndexOf("#") + 1 > end.x) {
            end.x = wallpaper[i].lastIndexOf("#") + 1;
        }
                
        if (wallpaper[i].includes("#")) {
            end.y = i + 1;
        }
    }
    
    return [start.y, start.x, end.y, end.x];
}