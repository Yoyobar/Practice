mine = "가위"
yours = "바위"

if mine == yours:
    print("비김")
elif (mine == '가위' and yours == '보') or (mine == '바위' and yours == '가위') or (mine == '보' and yours == '바위'):
    print("이겼다")
else:
    print('졌다')