# moves의 0번째 요소가 1이니까,
# board[n][1] 들 중에서 처음으로 0이 아닌 [n][1]의 숫자를 뽑아서 0으로 만들고, 리스트 r에 넣음
# 리스트 r에서 2회 연속하여 나오면 없애고 변수 +1을 함.
# moves에서 1은 board에서 0으로 취급한다.
collect = []
def solution(board, moves):
    answer = 0
    for i in range(len(moves)):
        for j in range(len(board)):
            if(board[j][moves[i]-1] != 0):
                collect.append(board[j][moves[i]-1])
                board[j][moves[i]-1] = 0
                break
                
    # for k in range(len(collect)):
    #     print(collect[k])
    loop_cnt = 0
    move = True


    while(move == True):
        for t in range(len(collect)):
            if(t >= len(collect)-1):
                break
            elif (collect[t] == collect[t+1]):
                print(collect.pop(t))
                print(collect.pop(t))
                answer += 2
        if(loop_cnt == 0): # 첫 번째 시행일시
            answer_save = answer
        else:
            if(answer_save != answer): # 변동이 있다면
                answer_save = answer
            else:
                move = False
        loop_cnt += 1
    return answer