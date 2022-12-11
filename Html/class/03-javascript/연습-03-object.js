let friend = {
    name: "철수",
    age: 13,
    camp: "코드캠프"
}
// undefined
friend
// {name: '철수', age: 13, camp: '코드캠프'}
friend.name
// '철수'
friend.age
// 13
friend.camp
// '코드캠프'


// In 객체안에 Array Type으로 표현
let classmate = [
    { name : "철수", age: 13, school: "다람쥐"},
    { name : "영희", age: 8, school: "공룡초등학교"},
    { name : "훈이", age: 11, school: "거북이초등학교"}
]
// undefined
classmate.length
// 3
classmate[0].school
// '다람쥐',  철수의, 학교
classmate[2].age
// 11,  훈이의, 나이