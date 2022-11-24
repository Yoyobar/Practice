def add(a,b):
    result=a+b
    if result < 0:
        print ('음수는 지원하지 않습니다.')
    else:
        print ('{}+{}={} 입니다.'.format(a,b,result))

add(2,4)
add(-2,-4)