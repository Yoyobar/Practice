def add(a,b):
    result = a+b
    if result < 0:
        print('값이 없습니다.')
        return a,b,result
    else:
        print('해답은 {}+{}={} 입니다.'.format(a,b,result))
        
n=add(-1,-2)
