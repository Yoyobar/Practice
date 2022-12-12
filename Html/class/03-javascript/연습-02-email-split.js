const email = "codecamp@gmail.com"
// undefined   const는 변동되지 않는 값
email.includes("@")
// true
email.split("@")
// (2) ['codecamp', 'gmail.com']
email.split("@")[0]
// 'codecamp'
email.split("@")[1]
// 'gmail.com'
let userMail = email.split("@")[0]
// undefined
let company = email.split("@")[1]
// undefined
userMail
// 'codecamp'
company
// 'gmail.com'
let maskingMail = []
// undefined
maskingMail.push(userMail[0])
// 1
maskingMail.push(userMail[1])
// 2
maskingMail.push(userMail[2])
// 3
maskingMail.push(userMail[3])
// 4
maskingMail
// (4) ['c', 'o', 'd', 'e']
maskingMail.push("*")
// 5
maskingMail.push("*")
// 6
maskingMail.push("*")
// 7
maskingMail.push("*")
// 8
maskingMail
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingMail.join("-")
// 'c-o-d-e-*-*-*-*'
maskingMail.join("/")
// 'c/o/d/e/*/*/*/*'
maskingMail.join("")
// 'code****'
maskingMail.join("") + "@" + company
// 'code****@gmail.com'
let result = maskingMail.join("") + "@" + company
// undefined
result
// 'code****@gmail.com'

/*
includes. 있는지 확인하고 boolean 형 Data 반환
split. 해당 값을 기준으로 리스트를 나눔
push. 해당 값을 리스트에 추가함
join. 리스트를 하나로 통합함, 값을 적을경우 사이사이 값을 넣어 추가됨
pop. 리스트의 마지막을 삭제함
concat. 리스트를 여러개 서로 묶음
length. 리스트의 길이를 알려줌, 1부터 시작

내일해볼것, email-split 자동화하기
*/