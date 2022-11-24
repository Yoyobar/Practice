list2 = [37, 23, 10, 33, 29, 40]
print(list2)

#list2.append(16), list2에 16을 추가 ()임
#print(list2)

list3=list2+[16]
print(list3)

n = 12
ownership = n in list3  #list3에 n의 value가 존재하는지 (true/false)
print(ownership)

n = 10
if n in list3:
    print('{}은 있어!'.format(n))  #!! list3에 n의 value가 존재한다면? (if)

list4=list2+list3
print(list4)

print(list4)
del list4[12]
list4.remove(40) #() 인거 주의, 리스트 명칭 자체를 지움
print(list4)


list5= [1,2,3,4,5]
list6= list5+[6]
del list5[9] #[]인거 주의, 리스트의 index에 맞게 지움

'''
list1= [1,2,3,4,5]일때, remove와 del의 작용은 다르다.
del list1[4]의 경우 4번 index인 5번이 지워지고
list1.remove(4)의 경우 실제 정수 '4'가 지워진다.
'''