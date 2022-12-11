//반복문 테스트 1.

const children = ["철수", "영희", "훈이"]
// undefined
for (let i = 0; i < 3; i++) {
    console.log(children[i] + "입니다")
}
// VM3295:2 철수입니다
// VM3295:2 영희입니다
// VM3295:2 훈이입니다
// undefined
for (let i = 0; i < children.length; i++) {
    console.log(children[i] + "입니다")
}
// VM3349:2 철수입니다
// VM3349:2 영희입니다
// VM3349:2 훈이입니다

//예제 실습, 각 리스트형 객체에서 값 뽑아내기
let persons = [
    {name: "철수", age: 17},
    {name: "영희", age: 21},
    {name: "민수", age: 11},
    {name: "구름", age: 24},
    {name: "박철", age: 19}
]
// undefined
for(let i = 0; i < persons.length; i++){
    if (persons[i].age >= 20){
        console.log(persons[i].name + "은 성인 입니다")
    } else {
        console.log(persons[i].name + "은 성인이 아닙니다.")
    }
}
// VM5479:5 철수은 성인이 아닙니다.
// VM5479:3 영희은 성인 입니다
// VM5479:5 민수은 성인이 아닙니다.
// VM5479:3 구름은 성인 입니다
// VM5479:5 박철은 성인이 아닙니다.

