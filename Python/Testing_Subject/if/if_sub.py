from datetime import datetime
hour = datetime.now().hour

if hour % 3 ==0:
    print('현재는',hour,'시 입니다.')
else:
    print('현재는 3의 배수시를 초과했습니다.')
    
    
    """
    3의 배수시를 초과할경우 3의 배수시를 print 하고 그게아니라면 시간을 출력하는 조건 함수식,
    다양한 조건문 조건을 배웠다.
    """