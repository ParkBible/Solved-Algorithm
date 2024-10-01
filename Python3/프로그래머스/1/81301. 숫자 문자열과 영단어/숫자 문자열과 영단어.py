def solution(s):
    mylist = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    org_s = s
    for i in mylist:
        if(s.find(i) != -1):
            print(i)
            s = s.replace(i, str(mylist.index(i)))
    return int(s)