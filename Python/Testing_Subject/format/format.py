number=20
greeting = '안녕하세요'
place = '문자열 포맷의 세계'
welcome = '환영합니다'

print(number, '번 손님', greeting, '.', place, '에 오신 것을', welcome, '!')

base= '{}번 손님, {}, {}에 오신 것을 {}!'
new_way=base.format(number,greeting,place,welcome)

print(base)
print(new_way)

mine='가위'
yours='바위'
result='졌다...'

print ('나는 {}, 너는 {}, 그래서 {}'.format(mine,yours,result))