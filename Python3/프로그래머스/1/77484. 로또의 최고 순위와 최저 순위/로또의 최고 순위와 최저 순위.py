# 5등 : 2개 번호가 일치
# 6등 : 하나도 안일치
def solution(lottos, win_nums):
    cnt1 = 0
    for i in lottos:
        if i in win_nums:
            cnt1 = cnt1 + 1
    cnt2 = cnt1
    for i in lottos:
        if(i == 0 and cnt1 <= 4):
            cnt2 = cnt2 + 1
    
    def res(cnt):
        if(cnt == 6):
            res = 1
        elif(cnt == 5):
            res = 2
        elif(cnt == 4):
            res = 3
        elif(cnt == 3):
            res = 4
        elif(cnt == 2):
            res = 5
        else:
            res = 6
        return res
    
    answer = [res(cnt2), res(cnt1)]
    return answer