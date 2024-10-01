function solution(record) {
    const users = {};
    var answer = [];
    
    for (const element of record) {
        const elementSet = element.split(" ");
        const event = elementSet[0];
        const id = elementSet[1];
        const nickname = elementSet[2];
        
        if (!users[id] || event === "Change" || event === "Enter") {
            users[id] = nickname;
        }
    }
    
    for (const element of record) {
        const elementSet = element.split(" ");
        const event = element.split(" ")[0];
        const id = elementSet[1];
        const nickname = users[id];
                
        let message = "";
        
        switch (event) {
            case "Enter":
                message = nickname + "님이 들어왔습니다.";
                break;
            case "Leave":
                message = nickname + "님이 나갔습니다.";
                break;
            default:
                break;
        }
        
        if (message !== "") {
            answer.push(message)
        }
    }
    
    return answer;
}