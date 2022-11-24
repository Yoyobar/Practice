
for i in range(10):
    print(i+1)
    
names = ['철수', '영희', '바둑이', '귀도', '비단뱀']
for i in range(len(names)): #range에 필요한 개수를 len함수로 파악
    name = names[i] #name함수를 names[i]로 선언하여 각각의 함수명이 나올 수 있게끔 함
    print('{}번: {}'.format(i+1,name)) #숫자와 이름으로 뒤섞여있는 리스트에서 필요한 값만 추출

for i, name in enumerate(names): #enumerate는 명칭과 카운트값에 둘다 값을 줌, 세다 라는뜻
    print('{}번: {}'.format(i+1,name))
    

for i in range(11172):
    print(chr(44032+i), end='')
